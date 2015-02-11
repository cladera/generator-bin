'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('bin:command', function () {
  before(function (done) {
    var testDir = path.join(os.tmpdir(), './temp-test');
    helpers.run(path.join(__dirname, '../app'))
      .inDir(testDir)
      .withOptions({'skip-install': true })
      .withArguments('test')
      .on('end', function(){
        helpers.run(path.join(__dirname, '../command'))
          .inDir(testDir)
          .withArguments('command')
          .withOptions({ 'skip-install': true })
          .withPrompt({bin: 'test'})
          .on('end',done);
      });

  });

  it('creates files', function () {
    assert.file([
      'test/command.js'
    ]);
  });
});
