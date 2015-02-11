'use strict';
var yeoman = require('yeoman-generator');
var path = require('path');
var fs = require('fs');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.argument('name', {
      required: true,
      type: String,
      desc: 'The command name'
    });
    this.name = this.name || path.basename(process.cwd());
    this.binChoices = [];
    var self = this;
    fs.readdirSync('./').forEach(function(file){
      if(file[0] !== '.'){
        var filePath = './'+file;
        var stat = fs.statSync(filePath);
        if(stat.isDirectory() && file !== 'node_modules'){
          self.binChoices.push(file);
        }
      }
    });
    if(this.binChoices.length == 0){
      this.log.error('No binary found');
      //process.exit(1);
    }
  },
  prompting: function () {
    var done = this.async();

    var prompts = [{
      type: 'list',
      name: 'bin',
      message: 'Select a toolkit:',
      choices: this.binChoices
    }];

    this.prompt(prompts, function (props) {
      this.bin = props.bin;

      done();
    }.bind(this));
  },
  writing: function () {
    this.fs.copyTpl(
      this.templatePath('_command.js'),
      this.destinationPath(this.bin+'/'+this.name+'.js'),
      {
        name: this.name
      }
    );
  }
});
