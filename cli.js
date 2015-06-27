#!/usr/bin/env node
'use strict';

var logrange = require('logrange'),
    helpVersion = require('help-version');


var usage = [
  'Usage:  gseq FIRST RATIO LAST',
  '',
  'Print geometric sequence of numbers, from FIRST to LAST.'
].join('\n');


var cli = module.exports = function (process, exit) {
  var argv = process.argv.slice(2);
  var help = helpVersion(usage, process).help;

  if (argv.length != 3) {
    return help(1);
  }

  var first = +argv[0],
      ratio = +argv[1],
      last = +argv[2];

  var print = function (x) {
    process.stdout.write(x + '\n');
  };

  logrange({ inclusive: true }, first, last, ratio).forEach(print);
  exit();
};


if (!module.parent) cli(process, process.exit);
