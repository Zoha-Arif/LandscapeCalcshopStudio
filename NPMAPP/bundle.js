const {simplify, parse, derivative} = require('mathjs');
console.log("HELLO WORLD!");
console.log(derivative('sin(2x^4)', 'x').toString());

console.log("WOOOOOOOOOOOOOOOO!");
var derivativeReal = derivative('sin(2x^4)', 'x').toString();
console.log(derivativeReal);