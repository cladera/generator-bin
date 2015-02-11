'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

var GeneratorCommand = module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
    this.argument('name', {type: String, required: true});
    this.name = this.name || path.basename(process.cwd());
    this.name = this._.camelize(this._.slugify(this._.humanize(this.name)));

  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ace ' + chalk.red('Command') + ' generator!'
    ));
    done();
    /*var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));*/
  },

  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('_index.js'),
        this.destinationPath('./'+this.name+'/index.js')
      );
      this.fs.copyTpl(
        this.templatePath('_bin.js'),
        this.destinationPath(this.name+'.js'),
        {
          name: this.name
        }

      );

    }
    /*projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
    }*/
  },

  install: function () {
    this.installDependencies({
      skipInstall: true
    });
  }
});
