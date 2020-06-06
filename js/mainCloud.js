//redo entire video but only with canvas cloud!


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