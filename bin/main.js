#!/usr/bin/env node

var transformer = require('../ngbrowserify');
    
var args = require('optimist')
            .usage('Usage: $0 < input.js > output.js')
            .argv;

process.stdin.pipe(transformer('.js')).pipe(process.stdout);

