"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Test = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Test = function Test() {
  var _React$createElement;

  return /*#__PURE__*/_react["default"].createElement(_.Manager, null, /*#__PURE__*/_react["default"].createElement(_.Reference, null), /*#__PURE__*/_react["default"].createElement(_.Reference, null, function (_ref) {
    var ref = _ref.ref;
    return /*#__PURE__*/_react["default"].createElement("div", {
      ref: ref
    });
  }), /*#__PURE__*/_react["default"].createElement(_.Popper // $FlowExpectError: should be one of allowed placements
  , (_React$createElement = {
    placement: "custom"
  }, _React$createElement["placement"] = "top", _React$createElement.strategy = "custom", _React$createElement["strategy"] = "fixed", _React$createElement.modifiers = [{
    name: 'flip',
    enabled: 'bar',
    order: 'foo'
  }], _React$createElement["modifiers"] = [{
    name: 'flip',
    enabled: false
  }], _React$createElement), function (_ref2) {
    var ref = _ref2.ref,
        style = _ref2.style,
        placement = _ref2.placement,
        isReferenceHidden = _ref2.isReferenceHidden,
        hasPopperEscaped = _ref2.hasPopperEscaped,
        update = _ref2.update,
        arrowProps = _ref2.arrowProps;
    return /*#__PURE__*/_react["default"].createElement("div", {
      ref: ref,
      style: _extends({}, style, {
        opacity: isReferenceHidden || hasPopperEscaped ? 0 : 1
      }),
      "data-placement": placement,
      onClick: function onClick() {
        return update();
      }
    }, "Popper", /*#__PURE__*/_react["default"].createElement("div", {
      ref: arrowProps.ref,
      style: arrowProps.style
    }));
  }), /*#__PURE__*/_react["default"].createElement(_.Popper, null, function (_ref3) {
    var ref = _ref3.ref,
        style = _ref3.style,
        placement = _ref3.placement;
    return /*#__PURE__*/_react["default"].createElement("div", {
      ref: ref,
      style: style,
      "data-placement": placement
    }, "Popper");
  }));
};

exports.Test = Test;