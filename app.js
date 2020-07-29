"use strict";

const https = require("https");
const cron = require("node-cron");
const parser = require("rss-parser");

var options = {
    hostname: 'typetalk.com',
    path: '/api/v1/topics/xxxxx',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-TYPETALK-TOKEN': 'xxxxxxxxxxxxxxxxxx'
    }
};

function messageSend(){
    var req = https.request(options, function (res){
        console.log("STATUS: " + res.statusCode);
        res.on("data", function(chunk){
            console.log("BODY: " + chunk);
        });
    });
    req.write(JSON.stringify({"message": "hoge"}));
    req.end();
}

function main(){
    messageSend();
    console.log("botを起動しました。");
}

main();