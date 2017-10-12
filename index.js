#!/usr/bin/env node

var concat = require("concat-stream");
var _ = require("lodash");

function bufferToHTML( buffer ) {
    var args = process.argv.slice(2);
    if ( args.length < 1 ) {
        args = [ 'Copy my link!' ];
    }

    var html = [
        '<html><body><a href="',
        buffer.toString().trim(),
        '">',
        _.escape( args.join(" ") ),
        '</a></body></html>'
    ].join("");

    console.log( html );
}

process.stdin.pipe( concat( bufferToHTML ) );
