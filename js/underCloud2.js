var canvas6 = document.getElementById("canvas6"), 
    c6 = canvas6.getContext('2d');

    c6.clearRect(0, 0, canvas6.width, canvas6.height); 

c6.lineWidth = 2;
n = 100;

var xMin4 = -10;
var xMax4 = 10; 
yMin4 = -10; 
yMax4 = 10; 

var math4 = mathjs(),
    expr4 = '',
    scope4 = {x: 0},
    tree4 = math4.parse(expr4, scope4);

function drawCurve4() {
    var xPixel4, yPixel4; 
    var i6; 
    var percentX4; 
    var percentY4; 
    var mathX4, mathY4; 

    c6.beginPath();

    for (i6 = 0; i6 < n; i6++){
        percentX4 = i6 / (n - 1);
        mathX4 = percentX4 * (xMax4 - xMin4) + xMin4;   

        mathY4 = evaluateMathExpr4(mathX4);
        percentY4 = (mathY4 - yMin4) / (yMax4 - yMin4);

        //Flip to match the canvas coordinates. 

        percentY4 = 1 - percentY4;
        

        xPixel4 = percentX4 * canvas6.width; 
        yPixel4 = percentY4 * canvas6.height; 
        c6.lineTo(xPixel4, yPixel4);
    }

    c6.stroke();
}

drawCurve4();

function evaluateMathExpr4(mathX4){
    scope4.x = mathX4;
    return tree4.eval(); 
}

function initTextField4(){
    var input = $('#upperCloud2');

      // Set the initial text value programmatically using jQuery.
      input.val(expr4);
      
      // Listen for changes using jQuery.
      input.keyup(function (event) {
        expr4 = input.val();
        tree4 = math4.parse(expr4, scope4);
        c6.clearRect(0, 0, canvas6.width, canvas6.height);
        drawCurve4();
      });
}

initTextField4();