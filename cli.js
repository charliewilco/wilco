#!/usr/bin/env node
'use strict';

var _stylelint = require('stylelint');

var _stylelint2 = _interopRequireDefault(_stylelint);

var _meow = require('meow');

var _meow2 = _interopRequireDefault(_meow);

var _rules = require('./rules/rules');

var _rules2 = _interopRequireDefault(_rules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wilco = function wilco(files) {
  return _stylelint2.default.lint({
    config: _rules2.default,
    formatter: 'string',
    files: files
  }).then(function (resultObject) {
    console.log(resultObject);
  }).catch(function (err) {
    console.warn(err);
  });
};

var cli = (0, _meow2.default)('\n    Usage\n      $ wilco <input>\n\n    Examples\n      $ wilco ./styles/**/*.css\n');

wilco(cli.input[0]);
