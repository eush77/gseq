#!/usr/bin/env node
'use strict';

var logrange = require('logrange'),
    helpVersion = require('help-version'),
    minimist = require('minimist'),
    sprintf = require('printf');


var usage = [
  'Usage:  gseq [OPTION]... FIRST RATIO LAST',
  '',
  'Print geometric sequence of numbers, from FIRST to LAST.',
  '',
  'Options:',
  '  -f, --format=FORMAT     Use printf-style FORMAT for each number.',
  '  -s, --separator=STRING  Use STRING to separate numbers (default: "\\n").'
].join('\n');


var cli = module.exports = function (process, exit) {
  var help = helpVersion(usage, process).help;
  var opts = minimist(process.argv.slice(2), {
    alias: {
      format: 'f',
      separator: 's'
    },
    default: {
      separator: '\n'
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

  var output = logrange({ inclusive: true }, first, last, ratio)
        .map(function (val) {
          return opts.format != null
            ? sprintf(opts.format, val)
            : val;
        })
        .join(opts.separator);

  if (output) {
    process.stdout.write(output + '\n');
  }
  exit();
};


if (!module.parent) cli(process, process.exit);
