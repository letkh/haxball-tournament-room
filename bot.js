const roomName = "Major League of Belarus [test]";
const maxPlayers = 20;
const roomPassword = "2705";
const token = "thr1.AAAAAGZmvS3ZH8DkgJcNGg.ZSRsS0JI9-Y";
const futsal = `{"name":"Futsal 3x3 4x4","height":339,"width":755,"maxViewWidth":0,"cameraFollow":"ball","spawnDistance":310,"kickOffReset":"partial","bg":{"type":"hockey","width":665,"height":290,"kickOffRadius":80,"cornerRadius":0,"color":"718C5A","goalLine":0},"canBeStored":true,"redSpawnPoints":[],"blueSpawnPoints":[],"playerPhysics":{"bCoef":0.5,"invMass":0.5,"damping":0.96,"acceleration":0.11,"kickingAcceleration":0.1,"kickingDamping":0.96,"kickStrength":7,"cGroup":[],"gravity":[0,0],"radius":15,"kickback":0},"ballPhysics":"disc0","segments":[{"v0":0,"v1":1,"bias":0,"bCoef":1,"curve":0,"vis":false,"cMask":["ball"],"cGroup":["wall"],"color":"000000"},{"v0":2,"v1":3,"bias":0,"bCoef":1,"curve":0,"vis":false,"cMask":["ball"],"cGroup":["wall"],"color":"000000"},{"v0":4,"v1":5,"bias":0,"bCoef":1,"curve":0,"vis":false,"cMask":["ball"],"cGroup":["wall"],"color":"000000"},{"v0":6,"v1":7,"bias":0,"bCoef":1,"curve":0,"vis":false,"cMask":["ball"],"cGroup":["wall"],"color":"000000"},{"v0":8,"v1":9,"bias":0,"bCoef":0.1,"curve":0,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"000000"},{"v0":9,"v1":10,"bias":0,"bCoef":0.1,"curve":180,"vis":false,"cMask":["red","blue"],"cGroup":["blueKO"],"color":"000000"},{"v0":10,"v1":9,"bias":0,"bCoef":0.1,"curve":180,"vis":false,"cMask":["red","blue"],"cGroup":["redKO"],"color":"000000"},{"v0":10,"v1":11,"bias":0,"bCoef":0.1,"curve":0,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"color":"000000"},{"v0":12,"v1":2,"bias":0,"bCoef":0.1,"curve":35,"vis":true,"cMask":["ball"],"cGroup":["wall"],"color":"FFFFFF"},{"v0":6,"v1":13,"bias":0,"bCoef":0.1,"curve":35,"vis":true,"cMask":["ball"],"cGroup":["wall"],"color":"FFFFFF"},{"v0":1,"v1":14,"bias":0,"bCoef":0.1,"curve":35,"vis":true,"cMask":["ball"],"cGroup":["wall"],"color":"FFFFFF"},{"v0":15,"v1":5,"bias":0,"bCoef":0.1,"curve":35,"vis":true,"cMask":["ball"],"cGroup":["wall"],"color":"FFFFFF"},{"v0":14,"v1":12,"bias":0,"bCoef":0.1,"curve":35,"vis":true,"cMask":["ball"],"cGroup":["wall"],"color":"FFFFFF"},{"v0":13,"v1":15,"bias":0,"bCoef":0.1,"curve":35,"vis":true,"cMask":["ball"],"cGroup":["wall"],"color":"FFFFFF"},{"v0":16,"v1":17,"bias":0,"bCoef":0,"curve":89.99999999999999,"vis":true,"cMask":[],"cGroup":["wall"],"color":"FFFFFF"},{"v0":19,"v1":18,"bias":0,"bCoef":0,"curve":89.99999999999999,"vis":true,"cMask":[],"cGroup":["wall"],"color":"FFFFFF"},{"v0":21,"v1":20,"bias":0,"bCoef":0,"curve":89.99999999999999,"vis":true,"cMask":[],"cGroup":["wall"],"color":"FFFFFF"},{"v0":22,"v1":23,"bias":0,"bCoef":0,"curve":89.99999999999999,"vis":true,"cMask":[],"cGroup":["wall"],"color":"FFFFFF"},{"v0":17,"v1":21,"bias":0,"bCoef":0,"curve":0,"vis":true,"cMask":[],"cGroup":["wall"],"color":"FFFFFF"},{"v0":19,"v1":23,"bias":0,"bCoef":0,"curve":0,"vis":true,"cMask":[],"cGroup":["wall"],"color":"FFFFFF"},{"v0":1,"v1":0,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":["ball"],"cGroup":["wall"],"color":"FFFFFF"},{"v0":5,"v1":4,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":["ball"],"cGroup":["wall"],"color":"FFFFFF"},{"v0":2,"v1":3,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":["ball"],"cGroup":["wall"],"color":"FFFFFF"},{"v0":6,"v1":7,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":["ball"],"cGroup":["wall"],"color":"FFFFFF"},{"v0":0,"v1":24,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":["ball"],"cGroup":["wall"],"color":"FFFFFF"},{"v0":3,"v1":25,"bias":0,"bCoef":1,"curve":0,"vis":true,"cMask":["ball"],"cGroup":["wall"],"color":"FFFFFF"},{"v0":26,"v1":27,"bias":0,"bCoef":0,"curve":0,"vis":true,"cMask":[],"cGroup":["wall"],"color":"FFFFFF"},{"v0":9,"v1":10,"bias":0,"bCoef":0,"curve":180,"vis":true,"cMask":[],"cGroup":["wall"],"color":"FFFFFF"},{"v0":29,"v1":28,"bias":0,"bCoef":0,"curve":180,"vis":true,"cMask":[],"cGroup":["wall"],"color":"FFFFFF"},{"v0":2,"v1":1,"bias":0,"bCoef":0,"curve":0,"vis":true,"cMask":[],"cGroup":["wall"],"color":"FFFFFF"},{"v0":6,"v1":5,"bias":0,"bCoef":0,"curve":0,"vis":true,"cMask":[],"cGroup":["wall"],"color":"FFFFFF"},{"v0":30,"v1":31,"bias":0,"bCoef":1,"curve":0,"vis":false,"cMask":["ball"],"cGroup":["wall"],"color":"FFFFFF"},{"v0":32,"v1":33,"bias":0,"bCoef":1,"curve":0,"vis":false,"cMask":["ball"],"cGroup":["wall"],"color":"FFFFFF"},{"v0":34,"v1":35,"bias":0,"bCoef":1,"curve":0,"vis":false,"cMask":["ball"],"cGroup":["wall"],"color":"FFFFFF"},{"v0":36,"v1":37,"bias":0,"bCoef":1,"curve":0,"vis":false,"cMask":["ball"],"cGroup":["wall"],"color":"FFFFFF"}],"vertexes":[{"x":-665,"y":290,"bCoef":1,"cMask":["ball"],"cGroup":["wall"]},{"x":-665,"y":80,"bCoef":1,"cMask":["ball"],"cGroup":["wall"]},{"x":-665,"y":-80,"bCoef":1,"cMask":["ball"],"cGroup":["wall"]},{"x":-665,"y":-290,"bCoef":1,"cMask":["ball"],"cGroup":["wall"]},{"x":665,"y":290,"bCoef":1,"cMask":["ball"],"cGroup":["wall"]},{"x":665,"y":80,"bCoef":1,"cMask":["ball"],"cGroup":["wall"]},{"x":665,"y":-80,"bCoef":1,"cMask":["ball"],"cGroup":["wall"]},{"x":665,"y":-290,"bCoef":1,"cMask":["ball"],"cGroup":["wall"]},{"x":0,"y":339,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0,"cMask":[],"cGroup":["wall"]},{"x":0,"y":-339,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-693,"y":-80,"bCoef":0.1,"cMask":["ball"],"cGroup":["wall"]},{"x":693,"y":-80,"bCoef":0.1,"cMask":["ball"],"cGroup":["wall"]},{"x":-693,"y":80,"bCoef":0.1,"cMask":["ball"],"cGroup":["wall"]},{"x":693,"y":80,"bCoef":0.1,"cMask":["ball"],"cGroup":["wall"]},{"x":-665,"y":-215,"bCoef":0,"cMask":[],"cGroup":["wall"]},{"x":-500,"y":-50,"bCoef":0,"cMask":[],"cGroup":["wall"]},{"x":665,"y":-215,"bCoef":0,"cMask":[],"cGroup":["wall"]},{"x":500,"y":-50,"bCoef":0,"cMask":[],"cGroup":["wall"]},{"x":-665,"y":215,"bCoef":0,"cMask":[],"cGroup":["wall"]},{"x":-500,"y":50,"bCoef":0,"cMask":[],"cGroup":["wall"]},{"x":665,"y":215,"bCoef":0,"cMask":[],"cGroup":["wall"]},{"x":500,"y":50,"bCoef":0,"cMask":[],"cGroup":["wall"]},{"x":665,"y":290,"bCoef":1,"cMask":["ball"],"cGroup":["wall"]},{"x":665,"y":-290,"bCoef":1,"cMask":["ball"],"cGroup":["wall"]},{"x":0,"y":290,"bCoef":0,"cMask":[],"cGroup":["wall"]},{"x":0,"y":-290,"bCoef":0,"cMask":[],"cGroup":["wall"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":674,"y":-80,"bCoef":1,"cMask":["ball"],"cGroup":["wall"]},{"x":674,"y":-290,"bCoef":1,"cMask":["ball"],"cGroup":["wall"]},{"x":-674,"y":-80,"bCoef":1,"cMask":["ball"],"cGroup":["wall"]},{"x":-674,"y":-290,"bCoef":1,"cMask":["ball"],"cGroup":["wall"]},{"x":-674,"y":80,"bCoef":1,"cMask":["ball"],"cGroup":["wall"]},{"x":-674,"y":290,"bCoef":1,"cMask":["ball"],"cGroup":["wall"]},{"x":674,"y":80,"bCoef":1,"cMask":["ball"],"cGroup":["wall"]},{"x":674,"y":290,"bCoef":1,"cMask":["ball"],"cGroup":["wall"]}],"goals":[{"p0":[-674,-80],"p1":[-674,80],"team":"red"},{"p0":[674,80],"p1":[674,-80],"team":"blue"}],"planes":[{"normal":[0,1],"dist":-290,"bCoef":1,"cMask":["ball"],"cGroup":["wall"]},{"normal":[0,-1],"dist":-290,"bCoef":1,"cMask":["ball"],"cGroup":["wall"]},{"normal":[0,1],"dist":-339,"bCoef":0.2,"cMask":["all"],"cGroup":["wall"]},{"normal":[0,-1],"dist":-339,"bCoef":0.2,"cMask":["all"],"cGroup":["wall"]},{"normal":[1,0],"dist":-755,"bCoef":0.2,"cMask":["all"],"cGroup":["wall"]},{"normal":[-1,0],"dist":-755,"bCoef":0.2,"cMask":["all"],"cGroup":["wall"]}],"discs":[{"pos":[0,0],"speed":[0,0],"gravity":[0,0],"radius":6.4,"bCoef":0.5,"invMass":1,"damping":0.99,"color":"EAFF00","cMask":["all"],"cGroup":["ball","kick","score"]},{"pos":[-665,80],"speed":[0,0],"gravity":[0,0],"radius":5,"bCoef":1,"invMass":0,"damping":0.99,"color":"FFE8E8","cMask":["all"],"cGroup":["all"]},{"pos":[-665,-80],"speed":[0,0],"gravity":[0,0],"radius":5,"bCoef":1,"invMass":0,"damping":0.99,"color":"FFE8E8","cMask":["all"],"cGroup":["all"]},{"pos":[665,80],"speed":[0,0],"gravity":[0,0],"radius":5,"bCoef":1,"invMass":0,"damping":0.99,"color":"CFE4E4","cMask":["all"],"cGroup":["all"]},{"pos":[665,-80],"speed":[0,0],"gravity":[0,0],"radius":5,"bCoef":1,"invMass":0,"damping":0.99,"color":"CFE4E4","cMask":["all"],"cGroup":["all"]}],"joints":[]}`;

roomConfig = {
  roomName: roomName,
  maxPlayers: maxPlayers,
  noPlayer: true,
  password: roomPassword,
  public: true,
  token: token,
};

let room = HBInit(roomConfig);

room.setCustomStadium(futsal);
room.setScoreLimit(0);
room.setTimeLimit(8);

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

function addPlayer(player, auth, name) {
  MySqlRequest(mysql_url, "POST", {
    mode: "addPlayer",
    auth: `${auth}`,
    name: `${name}`,
  })
    .then(function (res) {
      if (res.status !== 200) {
        console.log("Failed test - Status Code: " + res.status);
      } else {
        res.json().then(function (data) {
          if (data) {
            room.sendAnnouncement("MySQL Status: OK", player.id);
          } else {
            room.sendAnnouncement("MySQL Status: Failed", player.id);
          }
        });
      }
    })
    .catch(function (err) {
      console.log("Fetch Error :-S", err);
    });
}

function removePlayer(player, auth, name) {
  MySqlRequest(mysql_url, "POST", {
    mode: "removePlayer",
    auth: `${auth}`,
  })
    .then(function (res) {
      if (res.status !== 200) {
        console.log("Failed test - Status Code: " + res.status);
      } else {
        res.json().then(function (data) {
          if (data) {
            room.sendAnnouncement("MySQL Status: OK", player.id);
          } else {
            room.sendAnnouncement("MySQL Status: Failed", player.id);
          }
        });
      }
    })
    .catch(function (err) {
      console.log("Fetch Error :-S", err);
    });
}

function renamePlayer(player, auth, name) {
  MySqlRequest(mysql_url, "POST", {
    mode: "setRole",
    auth: `${auth}`,
    name: `${name}`,
  })
    .then(function (res) {
      if (res.status !== 200) {
        console.log("Failed test - Status Code: " + res.status);
      } else {
        res.json().then(function (data) {
          if (data) {
            room.sendAnnouncement("MySQL Status: OK", player.id);
          } else {
            room.sendAnnouncement("MySQL Status: Failed", player.id);
          }
        });
      }
    })
    .catch(function (err) {
      console.log("Fetch Error :-S", err);
    });
}

function setRole(player, auth, role) {
  MySqlRequest(mysql_url, "POST", {
    mode: "setRole",
    auth: `${auth}`,
    role: `${role}`,
  })
    .then(function (res) {
      if (res.status !== 200) {
        console.log("Failed test - Status Code: " + res.status);
      } else {
        res.json().then(function (data) {
          if (data) {
            room.sendAnnouncement("MySQL Status: OK", player.id);
          } else {
            room.sendAnnouncement("MySQL Status: Failed", player.id);
          }
        });
      }
    })
    .catch(function (err) {
      console.log("Fetch Error :-S", err);
    });
}

/* COMMANDS */

function getCommand(commandStr) {
  if (commands.hasOwnProperty(commandStr)) return commandStr;
  for (const [key, value] of Object.entries(commands)) {
    for (let alias of value.aliases) {
      if (alias == commandStr) return key;
    }
  }
  return false;
}

function teamChat(player, message) {
  let msgArray = message.split(/ +/).slice(1);
  let emoji = player.team == 1 ? "🔴" : player.team == 2 ? "🔵" : "⚪";
  let msg = `${emoji} [TEAM] ${player.name}: ${msgArray.join(" ")}`;
  let color = player.team == 1 ? 0xff4c4c : player.team == 2 ? 0x62cbff : null;
  let style = "bold";
  let players = room.getPlayerList();
  let team = players.filter((p) => p.team == player.team);
  for (let player of team) {
    room.sendAnnouncement(msg, player.id, color, style);
  }
}

function helpCommand(player, message) {
  let msgArray = message.split(/ +/).slice(1);
  if (msgArray.length == 0) {
    let commandString = "🌫️ Команды игроков:";
    for (const [key, value] of Object.entries(commands)) {
      if (value.desc && value.roles == 0) commandString += ` !${key},`;
    }
    commandString =
      commandString.substring(0, commandString.length - 1) + ".\n";
    if (authArray[player.id].role >= 1) {
      commandString += `🌫️ Команды администратора:`;
      for (const [key, value] of Object.entries(commands)) {
        if (value.desc && value.roles == 1) commandString += ` !${key},`;
      }
      if (commandString.slice(commandString.length - 1) == ":")
        commandString += ` None,`;
      commandString =
        commandString.substring(0, commandString.length - 1) + ".\n";
    }
    if (authArray[player.id].role == 2) {
      commandString += `🌫️ Команды владельца:`;
      for (const [key, value] of Object.entries(commands)) {
        if (value.desc && value.roles == 2) commandString += ` !${key},`;
      }
      if (commandString.slice(commandString.length - 1) == ":")
        commandString += ` None,`;
      commandString =
        commandString.substring(0, commandString.length - 1) + ".\n";
    }
    commandString +=
      "\n🌫️ Чтобы получить информацию о конкретной команде, введите ''!help <имя команды>''.";
    room.sendAnnouncement(commandString, player.id, 0xe6e6e6, "bold");
  } else if (msgArray.length >= 1) {
    let commandName = getCommand(msgArray[0].toLowerCase());
    if (commandName != false && commands[commandName].desc != false)
      room.sendAnnouncement(
        `Команда: \'${commandName}\'\n${commands[commandName].desc}`,
        player.id,
        0xe6e6e6,
        "bold"
      );
    else
      room.sendAnnouncement(
        `Данной команды не существует. Введите \'!help\' для просмотра списка команд.`,
        player.id,
        0xe6e6e6,
        "bold"
      );
  }
}

function addCommand(player, message) {
  let msgArray = message.split(/ +/).slice(1);
  if (msgArray.length != 2) {
    room.sendAnnouncement(
      `Неправильное количество аргументов. Пример !add publicID letkh`,
      player.id,
      0xe6e6e6,
      "bold"
    );
    return false;
  }
  room.sendAnnouncement(`Добавляем игрока ${msgArray[0]}(${msgArray[1]})...`);
  addPlayer(player, msgArray[0], msgArray[1]);
}

function removeCommand(player, message) {
  let msgArray = message.split(/ +/).slice(1);
  if (msgArray.length != 1) {
    room.sendAnnouncement(
      `Неправильное количество аргументов. Пример !remove publicID`,
      player.id,
      0xe6e6e6,
      "bold"
    );
    return false;
  }
  room.sendAnnouncement(`Удаляем игрока с ID:${msgArray[0]}`);
  removePlayer(player, msgArray[0]);
}

function renameCommand(player, message) {
  let msgArray = message.split(/ +/).slice(1);
  if (msgArray.length != 2) {
    room.sendAnnouncement(
      `Неправильное количество аргументов. Пример !rename publicID letkh1`,
      player.id,
      0xe6e6e6,
      "bold"
    );
    return false;
  }
  room.sendAnnouncement(`Переименовывем игрока ${msgArray[0]}(${msgArray[1]})`);
  renamePlayer(player, msgArray[0]);
}

function roleCommand(player, message) {
  let msgArray = message.split(/ +/).slice(1);
  if (msgArray.length != 2) {
    room.sendAnnouncement(
      `Неправильное количество аргументов. Пример !role publicID [0 - player, 1 - admin, 2 - host]`,
      player.id,
      0xe6e6e6,
      "bold"
    );
    return false;
  }
  room.sendAnnouncement(`Переименовывем игрока ${msgArray[0]}(${msgArray[1]})`);
  setRole(player, msgArray[0], msgArray[1]);
}

let commands = {
  help: {
    aliases: ["help"],
    roles: 0,
    desc: `Эта команда показывает все доступные команды.`,
    function: helpCommand,
  },
  add: {
    aliases: ["add"],
    roles: 2,
    desc: `Эта команда добавляет игрока на сервер (!add [publicID] [name])`,
    function: addCommand,
  },
  remove: {
    aliases: ["remove", "rm"],
    roles: 2,
    desc: `Эта команда удаляет игрока с сервер (!remove [publicID])`,
    function: removeCommand,
  },
  rename: {
    aliases: ["rename", "rn"],
    roles: 2,
    desc: `Эта команда переименовывет игрока (!rename [publicID] [new name])`,
    function: renameCommand,
  },
  role: {
    aliases: ["role"],
    roles: 2,
    desc: `Эта команда меняет роль игроку (!role [publicID] [0 - player, 1 - admin, 2 - host])`,
    function: roleCommand,
  },
};

room.onPlayerChat = function (player, message) {
  let msgArray = message.split(/ +/);
  if (msgArray[0][0] == "!") {
    let command = getCommand(msgArray[0].slice(1).toLowerCase());
    if (
      command != false &&
      commands[command].roles <= authArray[player.id].role
    )
      commands[command].function(player, message);
    else
      room.sendAnnouncement(
        `╭︎ Данной команды не существует.` +
          "\n" +
          `╰ Пожалуйста, введите '!help', чтобы получить доступные команды.`,
        player.id,
        0xe6e6e6,
        "bold"
      );
    return false;
  }
  if (msgArray[0].toLowerCase() == "ч" || msgArray[0].toLowerCase() == "x") {
    teamChat(player, message);
    return false;
  }
};

/* SOMETHING */

let authArray = [];

room.onPlayerJoin = function (player) {
  authArray[player.id] = { auth: player.auth, name: player.name, role: 0 };
  isRegistered(player);
  getAdmin(player);
  // room.setPlayerAdmin(player.id, true); // delete in prod.
  // authArray[player.id].role = 2;
  room.sendAnnouncement("👋 Добро пожаловать!", player.id);
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
  if (lastPlayersTouched[0] != player) {
    lastPlayersTouched[1] = lastPlayersTouched[0];
  }
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
  let stats = "";
  playerGoals.forEach(function (item, index, array) {
    if (item.goals != 0 || item.assists != 0) {
      stats += `@${item.name}(${item.goals}+${item.assists}), `;
    }
  });
  room.sendAnnouncement(`Итоги матча (${teamGoals.red} - ${teamGoals.blue}):
⚽ Г + П: ${stats.substring(0, stats.length - 2)}`);
};
