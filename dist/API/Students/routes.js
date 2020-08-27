"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _asyncHandler = require("../../helpers/asyncHandler");

var _controllers = require("./controllers");

var router = _express.default.Router();

router.get('/get/students', (0, _asyncHandler.asyncHandler)(_controllers.getAllStudents));
router.post('/post/student', (0, _asyncHandler.asyncHandler)(_controllers.postStudent));
var _default = router;
exports.default = _default;