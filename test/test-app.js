'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('bin:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({'skip-install': true })
      .withArguments(['test'])
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'test.js',
      'test/index.js'
    ]);
  });
});
