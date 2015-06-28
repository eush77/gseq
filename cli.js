#!/usr/bin/env node
'use strict';

var logrange = require('logrange'),
    helpVersion = require('help-version'),
    minimist = require('minimist'),
    sprintf = require('printf');


var usage = [
  'Usage:  gseq FIRST RATIO LAST',
  '',
  'Print geometric sequence of numbers, from FIRST to LAST.'
].join('\n');


var cli = module.exports = function (process, exit) {
  var help = helpVersion(usage, process).help;
  var opts = minimist(process.argv.slice(2), {
    alias: {
      format: 'f'
    },
    unknown: function (arg) {
      if (arg[0] == '-') {
        help(1);
      }
    }
  });
  var argv = opts._;

  if (argv.length != 3) {
    return help(1);
  }

  var first = +argv[0],
      ratio = +argv[1],
      last = +argv[2];

  logrange({ inclusive: true }, first, last, ratio).forEach(function (val) {
    if (opts.format != null) {
      val = sprintf(opts.format, val);
    }
    process.stdout.write(val + '\n');
  });

  exit();
};


if (!module.parent) cli(process, process.exit);
