#!/usr/bin/env node
'use strict';

var logrange = require('logrange');


(function main(argv) {
  var first, ratio, last;

  switch (argv.length) {
    case 1:
      argv.unshift(1);

    case 2:
      argv.splice(1, 0, 2);

    case 3:
      argv = argv.map(Number);
      first = argv[0];
      ratio = argv[1];
      last = argv[2];
      break;

    default:
      console.error('Usage:  gseq [<first>] [<ratio>] <end>');
      process.exit(1);
  }

  var print = function (x) { console.log(x) };

  logrange({ inclusive: true }, first, last, ratio).forEach(print);
}(process.argv.slice(2)));
