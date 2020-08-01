"use strict";

const https = require("https");
const cron = require("node-cron");
const Parser = require("rss-parser");
let parser = new Parser();

var options = {
    hostname: 'typetalk.com',
    path: '/api/v1/topics/xxxxxx',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-TYPETALK-TOKEN': 'xxxxxxxxxxxxxxxxxxxxx'
    }
};

function messageSend(){
    //HTTPS
    var req = https.request(options, function (res){
        console.log("STATUS: " + res.statusCode);
        res.on("data", function(chunk){
            console.log("BODY: " + chunk);
        });
    });

    //RSSフィードの処理
    (async () => {
        let feed = await parser.parseURL('リンク');
        console.log(feed.title);
        feed.items.forEach(item => {
            req.on("error", function(err){
                if(err){
                    console.log("Error.");
                    return;
                }
            });
            req.write(JSON.stringify({"message": item.title + '\n' + item.link}));
            req.end();
        });
    })();
    
}
function main(){
    cron.schedule("10 * * * * *", () => {
        messageSend();
    });
    console.log("botを起動しました。");
}

main();