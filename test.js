#!/usr/bin/env node

var parser = require('nomnom'),
    fs     = require('fs');


fs.readdirSync('./test').forEach(function(file){
  require('./test/'+file)(parser);
});

parser.parse();
