"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get_AllStudents = get_AllStudents;
exports.new_Student = new_Student;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = _interopRequireDefault(require("../../Database/models"));

function get_AllStudents() {
  return _get_AllStudents.apply(this, arguments);
}

function _get_AllStudents() {
  _get_AllStudents = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var students;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            students = _models.default.Student.findAll({});

            if (!students) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", students);

          case 3:
            return _context.abrupt("return", null);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _get_AllStudents.apply(this, arguments);
}

function new_Student(_x) {
  return _new_Student.apply(this, arguments);
}

function _new_Student() {
  _new_Student = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(_ref) {
    var username, student;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            username = _ref.username;
            console.log(username);
            student = _models.default.Student.create({
              username: username
            });

            if (!student) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", student);

          case 5:
            return _context2.abrupt("return", null);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _new_Student.apply(this, arguments);
}