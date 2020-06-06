console.log("Hello World"); 

var canvas = document.getElementById('myCanvas'), 
    c = canvas.getContext('2d'); 

// define the math "window". 
xMin = -10; 
xMax = 10; 
yMin = -10; 
yMax = 10; 

function drawCurve(){
    // n is the number of line segments. 
    var n = 100;
    //i is used inside of the for loop. 
    var i;
    var xPixel, yPixel;   
    var percentX; 
    var percentY;

    //these are the math coordinates. 
    var mathX, mathY;
    
    var math = mathjs(),
        expr = 'sin(x)*(x-1)',
        scope = {x: 0},
        tree = math.parse(expr, scope);

    
    function evaluateMathExpr(mathX){
        scope.x = mathX;
        var mathY = tree.eval();
        return mathY; 
    }

    c.beginPath();
    for (i = 0; i < n; i++){
        percentX = i / (n - 1);
        percentY = i / (n - 1);

        mathX = percentX * (xMax - xMin) + xMin; 
        mathY = evaluateMathExpr(mathX);    
        percentY = ((mathY -yMin))/(yMax - yMin);
        xPixel = percentX * canvas.width;
        yPixel = percentY * canvas.height; 
        c.lineTo(xPixel, yPixel);
    }
    c.lineWidth = 2;
    c.stroke();
}

drawCurve(); 
