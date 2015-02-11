#!/usr/bin/env node

var parser = require('nomnom'),
    fs     = require('fs');


fs.readdirSync('./<%= name %>').forEach(function(file){
  require('./<%= name %>/'+file)(parser);
});

parser.parse();
