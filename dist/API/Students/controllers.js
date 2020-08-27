"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllStudents = getAllStudents;
exports.postStudent = postStudent;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _student_Db = require("../../Services/Students/student_Db");

function getAllStudents(_x, _x2) {
  return _getAllStudents.apply(this, arguments);
}

function _getAllStudents() {
  _getAllStudents = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(req, res) {
    var students;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _student_Db.get_AllStudents)();

          case 2:
            students = _context.sent;

            if (!students) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.status(200).json({
              students: students
            }));

          case 7:
            return _context.abrupt("return", null);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getAllStudents.apply(this, arguments);
}

function postStudent(_x3, _x4) {
  return _postStudent.apply(this, arguments);
}

function _postStudent() {
  _postStudent = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(req, res) {
    var username, student;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            username = req.body.username;
            _context2.next = 3;
            return (0, _student_Db.new_Student)({
              username: username
            });

          case 3:
            student = _context2.sent;

            if (!student) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return", res.status(200).json({
              message: "new student is add ".concat(username)
            }));

          case 8:
            return _context2.abrupt("return", null);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _postStudent.apply(this, arguments);
}