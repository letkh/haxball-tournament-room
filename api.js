const express = require("express");
const mysql = require("mysql2");
const app = express();

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "tournament_room",
});

//MYSQL FUNCTIONS

function initialisation(req, res) { // nowhere in use
  const query = `CREATE TABLE IF NOT EXISTS users (
'id' INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
auth text not null,
name text not null,
role int not null
)`;
  pool.query(query, function (err, data) {
    if (err) {
      console.log(err);
    }
    res.end(JSON.stringify(true));
  });
}

function isRegistered(req, res) {
  const query = `SELECT name FROM users WHERE auth = '${req.body.auth}'`;
  pool.query(query, function (err, data) {
    if (err) {
      console.log(err);
    }
    if (data.length == 0) {
      res.end(JSON.stringify(false));
      return false;
    }
    if (data[0].name != req.body.name) {
      res.end(JSON.stringify(false));
      return false;
    }
    res.end(JSON.stringify(true));
  });
}

function getAdmin(req, res) {
  const query = `SELECT role FROM users WHERE auth = '${req.body.auth}'`;
  pool.query(query, function (err, data) {
    if (err) {
      console.log(err);
    }
    res.end(JSON.stringify(data[0].role));
  });
}

function addPlayer(req, res) {
  const query = `INSERT INTO users (auth, name, role) VALUES ('${req.body.auth}', '${req.body.name}', 0)`;
  pool.query(query, function (err, data) {
    if (err) {
      res.end(JSON.stringify(false));
      console.log(err);
      return false;
    }
    res.end(JSON.stringify(true));
  });
}

function removePlayer(req, res) {
  const query = `DELETE FROM users WHERE auth = '${req.body.auth}'`;
  pool.query(query, function (err, data) {
    if (err) {
      res.end(JSON.stringify(false));
      console.log(err);
      return false;
    }
    res.end(JSON.stringify(true));
  });
}

function renamePlayer(req, res) {
  const query = `UPDATE users SET name = ${req.body.name} WHERE auth = '${req.body.auth}'`;
  pool.query(query, function (err, data) {
    if (err) {
      console.log(err);
    }
    res.end(JSON.stringify(true));
  });
}


function setRole(req, res) {
  const query = `UPDATE users SET role = ${req.body.role} WHERE auth = '${req.body.auth}'`;
  pool.query(query, function (err, data) {
    if (err) {
      console.log(err);
    }
    res.end(JSON.stringify(true));
  });
}

app.get("/", function (req, res) {
  res.json("hello!");
});

app.post("/mysql", (req, res) => {
  switch (req.body.mode) {
    case "initialisation":
      initialisation(req, res);
      break;
    case "isRegistered":
      isRegistered(req, res);
      break;
    case "getAdmin":
      getAdmin(req, res);
      break;
    case "addPlayer":
      addPlayer(req, res);
      break;
    case "removePlayer":
      removePlayer(req, res);
      break;
    case "renamePlayer":
      renamePlayer(req, res);
      break;
    case "setRole":
      setRole(req, res);
      break;
  }
});
module.exports = app;
