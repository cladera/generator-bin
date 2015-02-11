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
    this.name = this._.camelize(this._.slugify(this._.humanize(this.name)));
    this.binChoices = [];
    var self = this;
    fs.readdirSync('./').forEach(function(file){
      if(file[0] !== '.'){
        var filePath = './'+file;
        var stat = fs.statSync(filePath);
        if(stat.isDirectory()){
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
      message: 'Which binary do you want the command for?',
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
