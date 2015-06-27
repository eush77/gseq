'use strict';

var gseq = require('../cli');

var test = require('tape'),
    cli = require('test-cli');


test('ascending', function (t) {
  t.plan(9);

  cli(gseq, '1', '2', '16', function (output, errput, code) {
    t.equal(output, [1, 2, 4, 8, 16, ''].join('\n'));
    t.equal(errput, '');
    t.equal(code, 0);
  });

  cli(gseq, '1', '1.5', '1.2', function (output, errput, code) {
    t.equal(output, '1\n');
    t.equal(errput, '');
    t.equal(code, 0);
  });

  cli(gseq, '1', '1.5', '0.8', function (output, errput, code) {
    t.equal(output, '');
    t.equal(errput, '');
    t.equal(code, 0);
  });
});


test('descending', function (t) {
  t.plan(9);

  cli(gseq, '16', '0.5', '1', function (output, errput, code) {
    t.equal(output, [16, 8, 4, 2, 1, ''].join('\n'));
    t.equal(errput, '');
    t.equal(code, 0);
  });

  cli(gseq, '1', '0.7', '0.6', function (output, errput, code) {
    t.equal(output, '1\n0.7\n');
    t.equal(errput, '');
    t.equal(code, 0);
  });

  cli(gseq, '1', '0.7', '1.3', function (output, errput, code) {
    t.equal(output, '');
    t.equal(errput, '');
    t.equal(code, 0);
  });
});
