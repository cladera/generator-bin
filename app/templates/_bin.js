#!/usr/bin/env node

var parser = require('nomnom'),
    fs     = require('fs'),
    path   = require('path');


fs.readdirSync(path.join(__dirname, './<%= name %>')).forEach(function(file){
  require(path.join(__dirname,'./<%= name %>/'+file))(parser);
});

parser.parse();
