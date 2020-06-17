var canvas4 = document.getElementById("canvas4"), 
    c4 = canvas4.getContext('2d');

    c4.clearRect(0, 0, canvas4.width, canvas4.height); 

c4.lineWidth = 2;
n = 100;

var xMin2 = -10;
var xMax2 = 10; 
yMin2 = -10; 
yMax2 = 10; 

var math2 = mathjs(),
    expr2 = '',
    scope2 = {x: 0},
    tree2 = math2.parse(expr2, scope2);

function drawCurve2() {
    var xPixel2, yPixel2; 
    var i4; 
    var percentX2; 
    var percentY2; 
    var mathX2, mathY2; 

    c4.beginPath();

    for (i4 = 0; i4 < n; i4++){
        percentX2 = i4 / (n - 1);
        mathX2 = percentX2 * (xMax2 - xMin2) + xMin2;   

        mathY2 = evaluateMathExpr2(mathX2);
        percentY2 = (mathY2 - yMin2) / (yMax2 - yMin2);

        //Flip to match the canvas coordinates. 

        percentY2 = 1 - percentY2;
        

        xPixel2 = percentX2 * canvas4.width; 
        yPixel2 = percentY2 * canvas4.height; 
        c4.lineTo(xPixel2, yPixel2);
    }

    c4.stroke();
}

drawCurve2();

function evaluateMathExpr2(mathX2){
    scope2.x = mathX2;
    return tree2.eval(); 
}

function initTextField2(){
    var input = $('#inputMountain');

      // Set the initial text value programmatically using jQuery.
      input.val(expr2);
      
      // Listen for changes using jQuery.
      input.keyup(function (event) {
        expr2 = input.val();
        tree2 = math2.parse(expr2, scope2);
        c4.clearRect(0, 0, canvas4.width, canvas4.height);
        drawCurve2();
      });
}

initTextField2();