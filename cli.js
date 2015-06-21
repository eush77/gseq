#!/usr/bin/env node
'use strict';

var logrange = require('logrange'),
    help = require('help-version')(usage()).help;


function usage() {
  return [
    'Usage:  gseq FIRST RATIO LAST',
    '',
    'Print geometric sequence of numbers, from FIRST to LAST.'
  ].join('\n');
}


(function main(argv) {
  if (argv.length != 3) {
    return help(1);
  }

  var first = +argv[0],
      ratio = +argv[1],
      last = +argv[2];

  var print = function (x) { console.log(x) };

  logrange({ inclusive: true }, first, last, ratio).forEach(print);
}(process.argv.slice(2)));
