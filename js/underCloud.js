var canvas3 = document.getElementById("derivativeCloudCanvas"), 
    c3 = canvas3.getContext('2d');

    c3.clearRect(0, 0, canvas3.width, canvas3.height); 

c3.lineWidth = 2;
n = 100;

var xMin1 = -10;
var xMax1 = 10; 
yMin1 = -10; 
yMax1 = 10; 

var math1 = mathjs(),
    expr1 = '',
    scope1 = {x: 0},
    tree1 = math1.parse(expr1, scope1);

function drawCurve1() {
    var xPixel1, yPixel1; 
    var i3; 
    var percentX1; 
    var percentY1; 
    var mathX1, mathY1; 

    c3.beginPath();

    for (i3 = 0; i3 < n; i3++){
        percentX1 = i3 / (n - 1);
        mathX1 = percentX1 * (xMax1 - xMin1) + xMin1;   

        mathY1 = evaluateMathExpr1(mathX1);
        percentY1 = (mathY1 - yMin1) / (yMax1 - yMin1);

        //Flip to match the canvas coordinates. 

        percentY1 = 1 - percentY1;
        

        xPixel1 = percentX1 * canvas3.width; 
        yPixel1 = percentY1 * canvas3.height; 
        c3.lineTo(xPixel1, yPixel1);
    }

    c3.stroke();
}

drawCurve1();

function evaluateMathExpr1(mathX1){
    scope1.x = mathX1;
    return tree1.eval(); 
}

function initTextField1(){
    var input = $('#inputunderCloud');

      // Set the initial text value programmatically using jQuery.
      input.val(expr1);
      
      // Listen for changes using jQuery.
      input.keyup(function (event) {
        expr1 = input.val();
        tree1 = math1.parse(expr1, scope1);
        c3.clearRect(0, 0, canvas3.width, canvas3.height);
        drawCurve1();
      });
}

initTextField1();