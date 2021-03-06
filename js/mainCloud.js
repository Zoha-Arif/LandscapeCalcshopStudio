//redo entire video but only with canvas cloud!

var canvasCloud = document.getElementById("cloudCanvas");
var cCloud = canvasCloud.getContext('2d');

//"n1" is the number of line segments. 
var n1 = 100; 
var xMin1 = -10; 
var xMax1 = 10; 
var yMin1 = -10; 
var yMax1 = 10; 

var math = mathjs(),
            expr2 = '',
            scope = {x: 0},
            tree = math.parse(expr2, scope);

function evaluateMathExprCloud(mathX1){
    scope.x = mathX1; 
    return tree.eval();
}

function initTextFieldCloud(){
    var input1 = $('#inputFieldCloud');

    // Set the initial text value programmatically using jQuery.
    input1.val(expr2);
      
    // Listen for changes using jQuery.
    input1.keyup(function (event) {
        expr2 = input1.val();
        //on keyup, start the countdown
        tree = math.parse(expr2, scope);
        cCloud.clearRect(0, 0, canvasCloud.width, canvasCloud.height); 
        drawCurveCloud();
    });
}

function drawCurveCloud(){
    var i1; 
    var xPixel1, yPixel1;
    var percentX1; 
    var percentY1; 

    var mathX1; 
    var mathY1;

    cCloud.beginPath();
    for (i1 = 0; i1 <n1; i1++){
        percentX1 = i1 / (n1 - 1);
        mathX1 = percentX1 * (xMax1 - xMin1) + xMin1;

        mathY1 = evaluateMathExprCloud(mathX1);

        percentY1 = (mathY1 - yMin1) / (yMax1 - yMin1); 
        percentY1 = 1 - percentY1;

        xPixel1 = percentX1 * canvasCloud.width;
        yPixel1 = percentY1 * canvasCloud.height;
        cCloud.lineTo(xPixel1, yPixel1);
    }
    cCloud.lineWidth = 2;
    cCloud.stroke();
    
}

drawCurveCloud();
initTextFieldCloud();



/*
console.log("Hello  2.0"); 

var canvasCloud = document.getElementById('cloudCanvas'), 
    cCloud = canvasCloud.getContext('2d'); 

// define the math "window". 
xMin1 = -10; 
xMax1 = 10; 
yMin1 = -10; 
yMax1 = 10; 

// n is the number of line segments. 
var n1 = 100;
//i is used inside of the for loop. 
var i1;
var xPixel1, yPixel1;   
var percentX1; 
var percentY1;

//these are the math coordinates. 
var mathX1, mathY1;

var math = mathjs(),
    exprCloud = 'cos(x)',
    scopeCloud = {x: 0}; 

function evaluateMathExprCloud(mathX1){
    scopeCloud.xPixel1 = mathX1;
    var mathY1 = tree1.eval();
    return mathY1; 
}

function drawCurveCloud(){
    cCloud.beginPath();
    for (i1 = 0; i1 < n1; i1++){
        percentX1 = i1 / (n1 - 1);
        percentY1 = i1 / (n1 - 1);

        mathX1 = percentX1 * (xMax1 - xMin1) + xMin1; 
        mathY1 = evaluateMathExprCloud(mathX1);    
        percentY1 = ((mathY1 - yMin1))/(yMax1 - yMin1);
        xPixel1 = percentX1 * canvasCloud.width;
        yPixel1 = percentY1 * canvasCloud.height; 
        cCloud.lineTo(xPixel1, yPixel1);
    }
    cCloud.lineWidth = 2;
    cCloud.stroke();
}

function initTextFieldCloud(){
    var input1 = $('#inputFieldClouds');

    // Set the initial text value programmatically using jQuery.
    input1.val(exprCloud);
    
    // Listen for changes using jQuery.
    input1.keyup(function () {
      exprCloud = input1.val();
      tree1 = math.parse(exprCloud, scopeCloud);
      cCloud.clearRect(0, 0, canvasCloud.width, canvasCloud.height); 
      drawCurveCloud(); 
    });
}

initTextFieldCloud();
*/