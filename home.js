console.log('hello');

const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

let url = "http://moduliweb.enac.gov.it/applicazioni/SAPR/APR_ReportOperatori.asp";

request(url, function (err, response, body) {
     if(!err) {
        const $ = cheerio.load(body);
        const index_arr = $("#container table tbody tr th font").map((th_index, th_item)=>{ return $(th_item).text().trim() });0
        const tr_arr = $("#container table tbody tr");
        delete tr_arr[0];
        const result = [];

        tr_arr.each((tr_index, tr_items)=>{
            let row = {};              
            if(!tr_items){
                return 
            }
	
            $(tr_items).children().each((td_index, td_items)=>{
                row[ index_arr[td_index] ] = $(td_items).text().trim()
            })
	        result[result.length] = row;
        })
    
        fs.writeFile("output.json", JSON.stringify(result, null , " "), function(err){
            if(err){
                console.log(err);
            } else {
                console.log('data have been added to file');
            }
        })
    } else {
        console.log(err);
    }
 });
