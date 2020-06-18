
/*
var http = require('http');
var fs = require('fs');

const PORT = 8080; 

fs.readFile('../index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
}); */

/*
console.log("HEREEE!!!");

import { create, all } from 'mathjs';
const math = create(all);
math.import(require('mathjs-simple-integral'));

/* -----------------------------------------------------------------------------------------------------------------------*/

/* console.log("JJJJJJJJJJJJJJJJJJJJJJJJJ");
console.log(math.integral('x^2', 'x'));
    console.log("A"); */
      // Listen for changes using jQuery.

    
const {simplify, parse, derivative} = require('mathjs');
var input = $('#derivativesInput');
input.keyup(function (event) {
    console.log("RUNNNING!");
    var derivativeIntial = input.val();
    console.log("B");
    console.log(derivative(derivativeIntial, 'x').toString());
    var final = derivative(derivativeIntial, 'x').toString();
    console.log("C");
    document.getElementById("derivativeOutput").innerHTML = final; 
}); 