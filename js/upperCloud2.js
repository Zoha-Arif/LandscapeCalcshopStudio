var canvas5 = document.getElementById("canvas5"), 
    c5 = canvas5.getContext('2d');

    c5.clearRect(0, 0, canvas5.width, canvas5.height); 

c5.lineWidth = 2;
n = 100;

var xMin3 = -10;
var xMax3 = 10; 
yMin3 = -10; 
yMax3 = 10; 

var math3 = mathjs(),
    expr3 = '',
    scope3 = {x: 0},
    tree3 = math3.parse(expr3, scope3);

function drawCurve3() {
    var xPixel3, yPixel3; 
    var i5; 
    var percentX3; 
    var percentY3; 
    var mathX3, mathY3; 

    c5.beginPath();

    for (i5 = 0; i5 < n; i5++){
        percentX3 = i5 / (n - 1);
        mathX3 = percentX3 * (xMax3 - xMin3) + xMin3;   

        mathY3 = evaluateMathExpr3(mathX3);
        percentY3 = (mathY3 - yMin3) / (yMax3 - yMin3);

        //Flip to match the canvas coordinates. 

        percentY3 = 1 - percentY3;
        

        xPixel3 = percentX3 * canvas5.width; 
        yPixel3 = percentY3 * canvas5.height; 
        c5.lineTo(xPixel3, yPixel3);
    }

    c5.stroke();
}

drawCurve3();

function evaluateMathExpr3(mathX3){
    scope3.x = mathX3;
    return tree3.eval(); 
}

function initTextField3(){
    var input = $('#underCloud2');

      // Set the initial text value programmatically using jQuery.
      input.val(expr3);
      
      // Listen for changes using jQuery.
      input.keyup(function (event) {
        expr3 = input.val();
        tree3 = math3.parse(expr3, scope3);
        c5.clearRect(0, 0, canvas5.width, canvas5.height);
        drawCurve3();
      });
}

initTextField3();