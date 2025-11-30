const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const api = require('./api');
const app = express();

app.use(cors({ origin: 'https://www.haxball.com' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', api);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  res.header('Content-Type', 'application/json');
  next(err);
});

// DEBUG
// app.use((err, req, res, next) => {
//   res.status(err.status || 500);
//   res.json({
//     message: err.message,
//     error: {}
//   });
//   console.log({
//     message: err.message,
//     error: {},
//   });
// });

app.set('port', 3333);

const server = app.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${server.address().port}`);
});
