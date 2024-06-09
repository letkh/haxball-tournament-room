const roomName = 'test'
const maxPlayers = 20
const roomPassword = '1'
const token = "thr1.AAAAAGZliA1LjQ1Ces-CKA.GIjkOcAeAiw";

roomConfig = {
    roomName: roomName,
    noPlayer: true,
    password: roomPassword,
    token: token,
}

let room = HBInit({roomConfig})

/* MYSQL */ 

let mysql_url = "http://localhost:3333/mysql";

function MySqlRequest(url, method, body) {
  return fetch(url, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

function isRegistered(player) {
  MySqlRequest(mysql_url, "POST", {
    mode: "isRegistered",
    auth: `${player.auth}`,
    name: `${player.name}`,
  })
    .then(function (res) {
      if (res.status !== 200) {
        console.log("Failed test - Status Code: " + res.status);
      } else {
        res.json().then(function (data) {
          if (!data) {
            room.kickPlayer(
              player.id,
              "Не зарегистрированный игрок.",
              false
            );
          }
        });
      }
    })
    .catch(function (err) {
      console.log("Fetch Error :-S", err);
    });
}

function getAdmin(player) {
  MySqlRequest(mysql_url, "POST", {
    mode: "getAdmin",
    auth: `${player.auth}`,
  })
    .then(function (res) {
      if (res.status !== 200) {
        console.log("Failed test - Status Code: " + res.status);
      } else {
        res.json().then(function (data) {
          if (data > 0) {
            room.setPlayerAdmin(player.id, true);
            authArray[player.id].role = data;
          }
        });
      }
    })
    .catch(function (err) {
      console.log("Fetch Error :-S", err);
    });
}

/* IMPORTANT FUNCTIONS */

let authArray = [];

room.onPlayerJoin = function (player) {
  authArray[player.id] = { auth: player.auth, name: player.name, role: 0 };
  isRegistered(player);
  getAdmin(player);
  room.sendAnnouncement("Добро пожаловать!", player.id);
};