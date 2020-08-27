"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _models = _interopRequireDefault(require("./Database/models"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _path = _interopRequireDefault(require("path"));

var _routes = _interopRequireDefault(require("./API/Students/routes"));

_dotenv.default.config();

var app = (0, _express.default)(); // Log all requests to file, but errors to console

app.use((0, _morgan.default)('dev'));
app.use(_bodyParser.default.json()); // Définition des CORS

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type');
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  next();
});

_models.default.connection.authenticate().then(function () {
  return console.log('database connected...');
}).catch(function (err) {
  return console.log("Error:".concat(err));
}); // Index Rout


app.use('/api/students', _routes.default);
app.use(_express.default.static(_path.default.join(__dirname + '/../build')));
app.use('*', function (req, res) {
  res.sendFile(_path.default.join(__dirname + '/../build/index.html'));
});
app.get('/*/*', function (req, res) {
  res.redirect('/notFound');
});
var _default = app;
exports.default = _default;