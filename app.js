"use strict";

const https = require("https");
const cron = require("node-cron");
const parser = require("rss-parser");

var options = {
    hostname: 'typetalk.com',
    path: '/api/v1/topics/xxxxxx',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-TYPETALK-TOKEN': 'xxxxxxxxxxxx'
    }
};

function main(){
    return;
}

main();