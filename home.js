console.log('hello');

const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const express = require('express')
const bodyParser = require('body-parser')
 
const app = express()
 
let url = "http://moduliweb.enac.gov.it/applicazioni/SAPR/APR_ReportOperatori.asp";

request(url, function (err, response, html) {
    if(!err) {
        const $ = cheerio.load(html);
        let allItems = $(".container").children();
        let items = [];
        allItems.each(function(){
          const result = $(".container").children().eq(index).children().eq(3).find('tr').text();
          if(result !== ""){
            items.push(result);
          }
          items.push()
        })
    }

});

fs.writeFile("output.json", JSON.stringify(items, nul, 4), function(err){
    if(err){
        console.log(err);
    } else {
        console.log('data have been added to file');
    }
})