
const express = require('express');
const mysql = require('mysql2');

const app = express();

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'tournament_room',
});

// MYSQL FUNCTIONS
function initialisation(req, res) {
  const query = `CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    auth TEXT NOT NULL,
    name TEXT NOT NULL,
    role INT NOT NULL
  )`;
  pool.query(query, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json(false);
    }
    res.json(true);
  });
}

function isRegistered(req, res) {
  const query = 'SELECT name FROM users WHERE auth = ?';
  pool.query(query, [req.body.auth], (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json(false);
    }
    if (data.length === 0 || data[0].name !== req.body.name) {
      return res.json(false);
    }
    res.json(true);
  });
}

function getAdmin(req, res) {
  const query = 'SELECT role FROM users WHERE auth = ?';
  pool.query(query, [req.body.auth], (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json(null);
    }
    res.json(data[0]?.role ?? null);
  });
}

function addPlayer(req, res) {
  const query = 'INSERT INTO users (auth, name, role) VALUES (?, ?, 0)';
  pool.query(query, [req.body.auth, req.body.name], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json(false);
    }
    res.json(true);
  });
}

function removePlayer(req, res) {
  const query = 'DELETE FROM users WHERE auth = ?';
  pool.query(query, [req.body.auth], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json(false);
    }
    res.json(true);
  });
}

function renamePlayer(req, res) {
  const query = 'UPDATE users SET name = ? WHERE auth = ?';
  pool.query(query, [req.body.name, req.body.auth], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json(false);
    }
    res.json(true);
  });
}

function setRole(req, res) {
  const query = 'UPDATE users SET role = ? WHERE auth = ?';
  pool.query(query, [req.body.role, req.body.auth], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json(false);
    }
    res.json(true);
  });
}

app.get('/', (req, res) => {
  res.json('hello!');
});

app.post('/mysql', (req, res) => {
  switch (req.body.mode) {
    case 'initialisation':
      initialisation(req, res);
      break;
    case 'isRegistered':
      isRegistered(req, res);
      break;
    case 'getAdmin':
      getAdmin(req, res);
      break;
    case 'addPlayer':
      addPlayer(req, res);
      break;
    case 'removePlayer':
      removePlayer(req, res);
      break;
    case 'renamePlayer':
      renamePlayer(req, res);
      break;
    case 'setRole':
      setRole(req, res);
      break;
    default:
      res.status(400).json({ error: 'Unknown mode' });
  }
});

module.exports = app;
