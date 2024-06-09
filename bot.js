const roomName = "test";
const maxPlayers = 20;
const roomPassword = "2705";
const token = "thr1.AAAAAGZl4oAXLXyENN17Dg.w21mclilxqU";

roomConfig = {
  roomName: roomName,
  noPlayer: true,
  password: roomPassword,
  token: token,
};

let room = HBInit(roomConfig);

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
            room.kickPlayer(player.id, "Не зарегистрированный игрок.", false);
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
          // returns role
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

/* SOMETHING */

let authArray = [];

room.onPlayerJoin = function (player) {
  authArray[player.id] = { auth: player.auth, name: player.name, role: 0 };
  // isRegistered(player);
  // getAdmin(player);
  room.setPlayerAdmin(player.id, true); // delete in prod.
  room.sendAnnouncement("Добро пожаловать!", player.id);
};

/* GOAL */

let lastPlayersTouched = [null, null];
let lastTeamTouched;
let playerGoals = [];
let teamGoals = { red: 0, blue: 0 };

function getTime(scores) {
  return (
    "[" +
    Math.floor(Math.floor(scores.time / 60) / 10).toString() +
    Math.floor(Math.floor(scores.time / 60) % 10).toString() +
    ":" +
    Math.floor(
      Math.floor(scores.time - Math.floor(scores.time / 60) * 60) / 10
    ).toString() +
    Math.floor(
      Math.floor(scores.time - Math.floor(scores.time / 60) * 60) % 10
    ).toString() +
    "] "
  );
}

room.onPlayerBallKick = function (player) {
  lastTeamTouched = player.team;
  lastPlayersTouched[1] = lastPlayersTouched[0];
  lastPlayersTouched[0] = player;
};

room.onPositionsReset = function () {
  lastPlayersTouched = [null, null];
};

room.onTeamGoal = function (team) {
  const scores = room.getScores();
  if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team == team) {
    if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team == team) {
      room.sendAnnouncement(
        `⚽ ${lastPlayersTouched[0].name} (${lastPlayersTouched[1].name}) | ${
          scores.red
        }-${scores.blue} | ${getTime(scores)}`
      );
      const goalplayer = lastPlayersTouched[0].id;
      room.setPlayerAvatar(goalplayer, "🏒");
      room.setPlayerDiscProperties(goalplayer, { radius: 25 });
      playerGoals[lastPlayersTouched[0].id].goals++;
      playerGoals[lastPlayersTouched[1].id].assists++;
      if (team == 1) {
        teamGoals.red++;
      } else {
        teamGoals.blue++;
      }
      setTimeout(() => {
        room.setPlayerAvatar(goalplayer, null);
      }, 1700);
    } else {
      room.sendAnnouncement(
        `⚽ ${lastPlayersTouched[0].name} | ${scores.red}-${
          scores.blue
        } | ${getTime(scores)}`
      );
      const goalplayer = lastPlayersTouched[0].id;
      room.setPlayerAvatar(goalplayer, "🏒");
      room.setPlayerDiscProperties(goalplayer, { radius: 25 });
      playerGoals[lastPlayersTouched[0].id].goals++;
      if (team == 1) {
        teamGoals.red++;
      } else {
        teamGoals.blue++;
      }
      setTimeout(() => {
        room.setPlayerAvatar(goalplayer, null);
      }, 1700);
    }
  } else {
    if (lastPlayersTouched[1] != null) {
      room.sendAnnouncement(
        `😂 ${lastPlayersTouched[0].name} (${lastPlayersTouched[1].name}) | ${
          scores.red
        }-${scores.blue} | ${getTime(scores)}`
      );
      const goalplayer = lastPlayersTouched[0].id;
      room.setPlayerAvatar(goalplayer, "👀");
      room.setPlayerDiscProperties(goalplayer, { radius: 10 });
      playerGoals[lastPlayersTouched[1].id].assists++;
      if (team != 1) {
        teamGoals.red++;
      } else {
        teamGoals.blue++;
      }
      setTimeout(() => {
        room.setPlayerAvatar(goalplayer, null);
      }, 1700);
    } else {
      room.sendAnnouncement(
        `😂 ${lastPlayersTouched[0].name} | ${scores.red}-${
          scores.blue
        } | ${getTime(scores)}`
      );
      const goalplayer = lastPlayersTouched[0].id;
      room.setPlayerAvatar(goalplayer, "👀");
      room.setPlayerDiscProperties(goalplayer, { radius: 10 });
      if (team != 1) {
        teamGoals.red++;
      } else {
        teamGoals.blue++;
      }
      setTimeout(() => {
        room.setPlayerAvatar(goalplayer, null);
      }, 1700);
    }
  }
};

room.onGameStart = function (byPlayer) {
  lastPlayersTouched = [null, null];
  teamGoals = { red: 0, blue: 0 };
  playerGoals = [];
  let players = room.getPlayerList();
  for (let i = 0; i < players.length; i++) {
    if (players[i].team != 0) {
      playerGoals[players[i].id] = {
        name: players[i].name,
        goals: 0,
        assists: 0,
      };
    }
  }
};

room.onGameStop = function () {
  let stats = '';
  playerGoals.forEach(function (item, index, array) {
    if (item.goals != 0 || item.assists != 0) {
      stats += `@${item.name}(${item.goals}+${item.assists}), `;
    }
  });
  room.sendAnnouncement(`Итоги матча (${teamGoals.red} - ${teamGoals.blue}):
⚽ Г + П: ${stats.substring(0, stats.length - 2)}`);
};
