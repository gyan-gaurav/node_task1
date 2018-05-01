console.log('hello');

const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

var url = "http://moduliweb.enac.gov.it/applicazioni/SAPR/APR_ReportOperatori.asp";

request(url, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  fs.writeFile('output.json', body);
  //console.log('body:', body); // Print the HTML for the Google homepage.
});


// request(url, function (err, response, html) {
//     if(!err) {
//         var $ = cheerio.load(html);
//         var items = $("").children();
//         items.each(function())
//     }

// });

// fs.writeFile("output.json", JSON.stringify(items, nul, 4), function(err){
//     if(err){
//         console.log(err);
//     } else {
//         console.log('data have been added to file');
//     }
// })