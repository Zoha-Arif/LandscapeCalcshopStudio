var samplePoly = "sin(x^2) + cos(3x^2)"

function polyDerivative(samplePoly){

    var finalStringSin = "";

    if (samplePoly.includes("sin", 0)) {
        var sinArray = [];
        for (var gir = 0; gir < samplePoly.length; gir++){
            var afterIndex3 = gir + 1; 
            if ((samplePoly[gir] == "s") || (samplePoly[afterIndex3] == "i")){
                var insideFunctionString = "";
                //get the stuff before the sin; 
                gir2 = gir - 1;
                console.log("GIR2:");
                console.log(gir2);
                for (var gir1 = gir2; gir1 != 101029383833838383736638373663773; gir1--){
                    if ((samplePoly[gir1] == "+") || (samplePoly[gir1] == "-")|| (typeof samplePoly[gir1] == 'undefined') || (samplePoly[gir1] == " ")){
                        gir1 = 101029383833838383736638373663773;
                    } else {
                        sinArray.push(samplePoly[gir1]);
                    }
                }
                sinArray = sinArray.reverse();

                var finalAnswer = [];
                var insideFunctionIndex =  gir + 4; 
                var beforeInsideFunctionIndex = insideFunctionIndex - 1;
                var afterInsideFunctionIndex = insideFunctionIndex + 1;  
                var beforeSinIndex = gir - 1;
                if ((samplePoly[insideFunctionIndex] == "x") && (samplePoly[beforeInsideFunctionIndex] == "(") && (samplePoly[afterInsideFunctionIndex] == ")")){
                    if (samplePoly[beforeSinIndex] == " "){
                        var realBeforeSinIndex = beforeInsideFunctionIndex - 1;
                        if  (((samplePoly[realBeforeSinIndex] == "+") || (samplePoly[realBeforeSinIndex] == "-") || (typeof samplePoly[realBeforeSinIndex] == 'undefined')) && (typeof samplePoly[beforeSinIndex] != 'number')){
                            finalAnswer.push("cos(x)"); 
                        }
                    }  else if (((samplePoly[beforeSinIndex] == "+") || (samplePoly[beforeSinIndex] == "-") || (typeof samplePoly[beforeSinIndex] == 'undefined')) && (typeof samplePoly[beforeSinIndex] != 'number')){
                        finalAnswer.push("cos(x)"); 
                    }
                } else {
                    var firstInsideIndex = afterInsideFunctionIndex - 1;  
                    for (var oct = firstInsideIndex; oct != 101029383833838383736638373663773; oct++){
                        if ((samplePoly[oct] == ")") || (typeof samplePoly[oct] == undefined)){
                            oct = 101029383833838383736638373663773;
                        } else {
                            insideFunctionString = insideFunctionString + samplePoly[oct];
                        }
                    }

                    var insideSign = "+";
                    insideFunctionIndex1 = insideFunctionIndex; 
                    if ((samplePoly[(insideFunctionIndex1)]) == "-"){
                        insideSign = "-";
                    }

                    var finalInside = nestedDerivative(insideFunctionString);
                    finalInside = String(finalInside);

                    console.log("FINAL INSIDE! WOOOOOO");
                    console.log(insideFunctionString);
                    console.log(finalInside);

                    if (insideSign == "-"){
                        finalInside = insideSign + finalInside;
                    }

                    //get the stuff before the sin function
                    var beforeStuff = "";
                    var beforeInsideIndex = gir - 1; 
                    for (var fish = beforeInsideIndex; fish != 101029383833838383736638373663773; fish--){
                        if ((samplePoly[fish] == " ") || (samplePoly[fish] == "+") || (samplePoly[fish] == "-") || (typeof samplePoly[fish] == 'undefined')) {
                            fish = 101029383833838383736638373663773;
                        } else {
                            beforeStuff  = beforeStuff + samplePoly[fish];
                        }
                    }

                    var splitString = beforeStuff.split("");
                    var reverseArray = splitString.reverse();
                    beforeStuff = reverseArray.join("");

                    //split inside function into its exponent and x. 
                    //multiply constants. 
                    //combine into one string.

                    if (typeof finalInside.includes("x", 0) == 'undefined'){
                        finalAnswer.push(0);
                    } else {
                        var exponentArray = [];
                        if ((finalInside.includes("^", 0) == true) && (finalInside.includes("+", 0) == false)){
                            for (var viola = 0; viola < finalInside.length; viola++){
                                exponentArray.push(finalInside[viola]); 
                            }

                            console.log("EXPONENTS RAY!");
                            console.log(exponentArray);
                            var constantMultiply = [];
                            var exponentStarts = 0; 
                            for (var bird = 0; bird != 101029383833838383736638373663773; bird++){
                                if ((exponentArray[bird] == "x") || (exponentArray[bird] == "^")){
                                    if ((exponentArray[bird] == "x")){
                                        for (var bird2 = (bird + 1); bird2 != 101029383833838383736638373663773; bird2++){
                                            if (exponentArray[bird2] == "^"){ 
                                                exponentStarts = bird2;
                                                bird2 = 101029383833838383736638373663773;
                                            } 
                                        }
                                    }
                                    bird = 101029383833838383736638373663773;
                                } else {
                                    constantMultiply.push(exponentArray[bird]);
                                    }
                                }
                            var exponent = [];

                            console.log("(((((((((((((((((((((((");
                            console.log(exponentStarts);
                            for (var sea = (exponentStarts + 1); sea != 101029383833838383736638373663773; sea++){
                                if ((exponentArray[sea] == " ") || (exponentArray[sea] == "+") || (exponentArray[sea] == "-") || (typeof exponentArray[sea] == 'undefined')){
                                    sea = 101029383833838383736638373663773;
                                } else {
                                    exponent.push(exponentArray[sea]);
                                }
                            }

                            var constantsBeforeSin = ""; 
                            console.log("GIRRRR");
                            console.log(gir);
                            var sign1 = "+";
                            for (var yay = (gir - 1); yay != 101029383833838383736638373663773; yay--){
                                if ((samplePoly[yay] == " ") || (samplePoly[yay] == "+") || (samplePoly[yay] == "-") || (typeof samplePoly[yay] == 'undefined')){
                                    if (samplePoly[yay] == " "){
                                        yay1 = yay - 1; 
                                        if (samplePoly[yay1] == "+"){
                                            sign1 = "+";
                                        } else if (samplePoly[yay1] =="-"){
                                            sign1 = "-"
                                        }
                                    } else if (samplePoly[yay] == "+"){
                                        sign1 = "+";
                                    } else if (samplePoly[yay] == "-") {
                                        sign1 = "-";
                                    }
                                    yay = 101029383833838383736638373663773;
                                } else {
                                    constantsBeforeSin = constantsBeforeSin + samplePoly[yay];
                                }
                            }

                            constantsBeforeSin1 = constantsBeforeSin.split("");
                            var reverseArray2 = constantsBeforeSin1.reverse();
                            var joinArray2 = reverseArray2.join("");
                            constantsBeforeSin = joinArray2;

                            console.log("CONSTANTS BEFORE SIN");
                            console.log(constantsBeforeSin);

                            console.log("EXPONENTS ARRAY"); 
                            console.log(exponent);

                            console.log("CONSTANT MULTIPLY");
                            console.log(constantMultiply);

                            var exponentNumber = exponent.join("");

                            var str = constantMultiply.join('');
                            var str = parseInt(str);

                            var exponentNumber = parseInt(exponentNumber);
                            exponentNumber = exponentNumber.toString(); 

                            var beforeSinConstant = parseInt(constantsBeforeSin);

                            var newConstant;
                            if (isNaN(beforeSinConstant) == true){
                                newConstant = str; 
                            } else {
                                newConstant = str * beforeSinConstant; 
                            }
                            
                            if (sign1 == "-") {
                                newConstant = newConstant * -1;
                                if (newConstant < 0){
                                    finalStringSin = newConstant + "x^" + exponentNumber + "cos(" +  insideFunctionString + ")"
                                } else {
                                    finalStringSin = "+" + newConstant + "x^" + exponentNumber + "cos(" +  insideFunctionString + ")"
                                }
                                
                            } else if (sign1 =="+") {
                                if (newConstant < 0){
                                    finalStringSin = newConstant + "x^" + exponentNumber + "cos(" +  insideFunctionString + ")";
                                } else {
                                    finalStringSin = "+" + newConstant + "x^" + exponentNumber + "cos(" +  insideFunctionString + ")";
                                }
                            }

                            console.log("NEW CONSTANTTTTTT ****************"); 
                            console.log(newConstant);
                            var newConstant = newConstant.toString();

                            console.log("FINAL STRING"); 
                            console.log(finalStringSin);
                    } else if (finalInside.includes("^", 0) == false){
                        var constantsBeforeSin = ""; 
                        var sign1 = "+";
                        for (var yay = (gir - 1); yay != 101029383833838383736638373663773; yay--){
                            if ((samplePoly[yay] == " ") || (samplePoly[yay] == "+") || (samplePoly[yay] == "-") || (typeof samplePoly[yay] == 'undefined')){
                                if (samplePoly[yay] == " "){
                                    yay1 = yay - 1; 
                                    if (samplePoly[yay1] == "+"){
                                        sign1 = "+";
                                    } else if (samplePoly[yay1] =="-"){
                                        sign1 = "-"
                                    }
                                } else if (samplePoly[yay] == "+"){
                                    sign1 = "+";
                                } else if (samplePoly[yay] == "-") {
                                    sign1 = "-";
                                }
                                yay = 101029383833838383736638373663773;
                            } else {
                                constantsBeforeSin = constantsBeforeSin + samplePoly[yay];
                            }
                        }

                        var beforeSinConstant = parseInt(constantsBeforeSin);
                        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                        console.log(finalInside);
                        finalInside = parseInt(finalInside);
                        var newConstant;
                   
                    if (isNaN(beforeSinConstant) == true){
                        newConstant = finalInside;
                        console.log("MADE IT HERE!!!!!!!!!!!!!!!!!!!!!!");
                        console.log(newConstant);
                        console.log(finalInside);
                    } else {
                        newConstant = finalInside * beforeSinConstant;
                    }

                    if (sign1 == "-") {
                        newConstant = newConstant * -1;
                        if (newConstant < 0){
                            finalStringSin = newConstant + "cos(" +  insideFunctionString + ")"
                        } else {
                            finalStringSin = "+" + newConstant + "cos(" +  insideFunctionString + ")"
                        }
                        
                    } else if (sign1 =="+") {
                        if (newConstant < 0){
                            finalStringSin = newConstant + "cos(" +  insideFunctionString + ")";
                        } else {
                            finalStringSin = "+" + newConstant + "cos(" +  insideFunctionString + ")";
                        }
                    }

                    console.log("NEW CONSTANTTTTTT ****************"); 
                    console.log(newConstant);
                    var newConstant = newConstant.toString();

                    console.log("FINAL STRING FOR REAL SIN"); 
                    console.log(finalStringSin);
                    }
                }
                
            }
        }
    }
}

var finalStringCos = "";

if (samplePoly.includes("cos", 0)) {
    var cosArray = [];
    for (var gir = 0; gir < samplePoly.length; gir++){
        var afterIndex3 = gir + 1; 
        if ((samplePoly[gir] == "c") || (samplePoly[afterIndex3] == "o")){
            var insideFunctionString = "";
            //get the stuff before the sin; 
            gir2 = gir - 1;
            console.log("GIR2:");
            console.log(gir2);
            for (var gir1 = gir2; gir1 != 101029383833838383736638373663773; gir1--){
                if ((samplePoly[gir1] == "+") || (samplePoly[gir1] == "-")|| (typeof samplePoly[gir1] == 'undefined') || (samplePoly[gir1] == " ")){
                    gir1 = 101029383833838383736638373663773;
                } else {
                    cosArray.push(samplePoly[gir1]);
                }
            }
            cosArray = cosArray.reverse();

            var finalAnswer = [];
            var insideFunctionIndex =  gir + 4; 
            var beforeInsideFunctionIndex = insideFunctionIndex - 1;
            var afterInsideFunctionIndex = insideFunctionIndex + 1;  
            var beforeCosIndex = gir - 1;
            if ((samplePoly[insideFunctionIndex] == "x") && (samplePoly[beforeInsideFunctionIndex] == "(") && (samplePoly[afterInsideFunctionIndex] == ")")){
                if (samplePoly[beforeCosIndex] == " "){
                    var realBeforeCosIndex = beforeInsideFunctionIndex - 1;
                    if  (((samplePoly[realBeforeCosIndex] == "+") || (samplePoly[realBeforeCosIndex] == "-") || (typeof samplePoly[realBeforeCosIndex] == 'undefined')) && (typeof samplePoly[beforeCosIndex] != 'number')){
                        finalAnswer.push("-sin(x)"); 
                    }
                }  else if (((samplePoly[beforeCosIndex] == "+") || (samplePoly[beforeCosIndex] == "-") || (typeof samplePoly[beforeCosIndex] == 'undefined')) && (typeof samplePoly[beforeCosIndex] != 'number')){
                    finalAnswer.push("-sin(x)"); 
                }
            } else {
                var firstInsideIndex = afterInsideFunctionIndex - 1;  
                for (var oct = firstInsideIndex; oct != 101029383833838383736638373663773; oct++){
                    if ((samplePoly[oct] == ")") || (typeof samplePoly[oct] == undefined)){
                        oct = 101029383833838383736638373663773;
                    } else {
                        insideFunctionString = insideFunctionString + samplePoly[oct];
                    }
                }

                var insideSign = "+";
                insideFunctionIndex1 = insideFunctionIndex; 
                if ((samplePoly[(insideFunctionIndex1)]) == "-"){
                    insideSign = "-";
                }

                var finalInside = nestedDerivative(insideFunctionString);
                console.log(finalInside);
                finalInside = String(finalInside);

                console.log("COSSSS FINAL INSIDE *@(#&(#@&@( EJJEJEJEJEJEJJE");
                console.log(finalInside);
                console.log(insideFunctionString);

                if (insideSign == "-"){
                    finalInside = insideSign + finalInside;
                }

                //get the stuff before the sin function
                var beforeStuff = "";
                var beforeInsideIndex = gir - 1; 
                for (var fish = beforeInsideIndex; fish != 101029383833838383736638373663773; fish--){
                    if ((samplePoly[fish] == " ") || (samplePoly[fish] == "+") || (samplePoly[fish] == "-") || (typeof samplePoly[fish] == 'undefined')) {
                        fish = 101029383833838383736638373663773;
                    } else {
                        beforeStuff  = beforeStuff + samplePoly[fish];
                    }
                }

                var splitString = beforeStuff.split("");
                var reverseArray = splitString.reverse();
                beforeStuff = reverseArray.join("");

                //split inside function into its exponent and x. 
                //multiply constants. 
                //combine into one string.

                if (typeof finalInside.includes("x", 0) == 'undefined'){
                    finalAnswer.push(0);
                } else {
                    var exponentArray = [];
                    if ((finalInside.includes("^", 0) == true) && (finalInside.includes("+", 0) == false)){
                        for (var viola = 0; viola < finalInside.length; viola++){
                            exponentArray.push(finalInside[viola]); 
                        }

                        console.log("EXPONENTS RAY!");
                        console.log(exponentArray);
                        var constantMultiply = [];
                        var exponentStarts = 0; 
                        for (var bird = 0; bird != 101029383833838383736638373663773; bird++){
                            if ((exponentArray[bird] == "x") || (exponentArray[bird] == "^")){
                                if ((exponentArray[bird] == "x")){
                                    for (var bird2 = (bird + 1); bird2 != 101029383833838383736638373663773; bird2++){
                                        if (exponentArray[bird2] == "^"){ 
                                            exponentStarts = bird2;
                                            bird2 = 101029383833838383736638373663773;
                                        } 
                                    }
                                }
                                bird = 101029383833838383736638373663773;
                            } else {
                                constantMultiply.push(exponentArray[bird]);
                                }
                            }
                        var exponent = [];

                        console.log("(((((((((((((((((((((((");
                        console.log(exponentStarts);
                        for (var sea = (exponentStarts + 1); sea != 101029383833838383736638373663773; sea++){
                            if ((exponentArray[sea] == " ") || (exponentArray[sea] == "+") || (exponentArray[sea] == "-") || (typeof exponentArray[sea] == 'undefined')){
                                sea = 101029383833838383736638373663773;
                            } else {
                                exponent.push(exponentArray[sea]);
                            }
                        }

                        var constantsBeforeCos = ""; 
                        console.log("GIRRRR");
                        console.log(gir);
                        var sign1 = "+";
                        for (var yay = (gir - 1); yay != 101029383833838383736638373663773; yay--){
                            if ((samplePoly[yay] == " ") || (samplePoly[yay] == "+") || (samplePoly[yay] == "-") || (typeof samplePoly[yay] == 'undefined')){
                                if (samplePoly[yay] == " "){
                                    yay1 = yay - 1; 
                                    if (samplePoly[yay1] == "+"){
                                        sign1 = "+";
                                    } else if (samplePoly[yay1] =="-"){
                                        sign1 = "-"
                                    }
                                } else if (samplePoly[yay] == "+"){
                                    sign1 = "+";
                                } else if (samplePoly[yay] == "-") {
                                    sign1 = "-";
                                }
                                yay = 101029383833838383736638373663773;
                            } else {
                                constantsBeforeCos = constantsBeforeCos + samplePoly[yay];
                            }
                        }

                        constantsBeforeCos1 = constantsBeforeCos.split("");
                        var reverseArray2 = constantsBeforeCos1.reverse();
                        var joinArray2 = reverseArray2.join("");
                        constantsBeforeCos = joinArray2;

                        console.log("CONSTANTS BEFORE COS");
                        console.log(constantsBeforeCos);

                        console.log("EXPONENTS ARRAY"); 
                        console.log(exponent);

                        console.log("CONSTANT MULTIPLY");
                        console.log(constantMultiply);

                        var exponentNumber = exponent.join("");

                        var str = constantMultiply.join('');
                        var str = parseInt(str);

                        var exponentNumber = parseInt(exponentNumber);
                        exponentNumber = exponentNumber.toString(); 

                        var beforeCosConstant = parseInt(constantsBeforeCos);


                        if (isNaN(beforeCosConstant) == true){
                            newConstant = str; 
                        } else {
                            newConstant = str * beforeCosConstant; 
                        }

                        if (sign1 == "-") {
                            newConstant = newConstant * -1;
                            newConstant = newConstant * -1
                            if (newConstant < 0){
                                finalStringCos = newConstant + "x^" + exponentNumber + "sin(" +  insideFunctionString + ")"
                            } else {
                                finalStringCos = "+" + newConstant + "x^" + exponentNumber + "sin(" +  insideFunctionString + ")"
                            }
                            
                        } else if (sign1 =="+") {
                            newConstant = newConstant * -1;
                            if (newConstant < 0){
                                finalStringCos = newConstant + "x^" + exponentNumber + "sin(" +  insideFunctionString + ")";
                            } else {
                                finalStringCos = "+" + newConstant + "x^" + exponentNumber + "sin(" +  insideFunctionString + ")";
                            }
                        }

                        console.log("NEW CONSTANTTTTTT ****************"); 
                        console.log(newConstant);
                        var newConstant = newConstant.toString();

                        console.log("FINAL STRING FOR REAL COS"); 
                        console.log(finalStringCos);
                } else {

                    var constantsBeforeCos = ""; 
                    console.log("GIRRRR");
                    console.log(gir);
                    var sign1 = "+";
                    for (var yay = (gir - 1); yay != 101029383833838383736638373663773; yay--){
                        if ((samplePoly[yay] == " ") || (samplePoly[yay] == "+") || (samplePoly[yay] == "-") || (typeof samplePoly[yay] == 'undefined')){
                            if (samplePoly[yay] == " "){
                                yay1 = yay - 1; 
                                if (samplePoly[yay1] == "+"){
                                    sign1 = "+";
                                } else if (samplePoly[yay1] =="-"){
                                    sign1 = "-"
                                }
                            } else if (samplePoly[yay] == "+"){
                                sign1 = "+";
                            } else if (samplePoly[yay] == "-") {
                                sign1 = "-";
                            }
                            yay = 101029383833838383736638373663773;
                        } else {
                            constantsBeforeCos = constantsBeforeCos + samplePoly[yay];
                        }
                    }

                    var beforeCosConstant = parseInt(constantsBeforeCos);
                    finalInside = parseInt(finalInside);

                    if (isNaN(beforeCosConstant) == true){
                        newConstant = finalInside;
                    } else {
                        newConstant = finalInside * beforeCosConstant;
                    }

                    if (sign1 == "-") {
                        newConstant = newConstant * -1;
                        newConstant = newConstant * -1
                        if (newConstant < 0){
                            finalStringCos = newConstant + "sin(" +  insideFunctionString + ")"
                        } else {
                            finalStringCos = "+" + newConstant + "sin(" +  insideFunctionString + ")"
                        }
                        
                    } else if (sign1 =="+") {
                        newConstant = newConstant * -1;
                        if (newConstant < 0){
                            finalStringCos = newConstant + "sin(" +  insideFunctionString + ")";
                        } else {
                            finalStringCos = "+" + exponentNumber + "sin(" +  insideFunctionString + ")";
                        }
                    }

                    console.log("NEW CONSTANTTTTTT ****************"); 
                    console.log(newConstant);
                    var newConstant = newConstant.toString();

                    console.log("FINAL STRING FOR REAL COS"); 
                    console.log(finalStringCos);



                }
            }
            
        }
    }
}
}

    function nestedDerivative(samplePoly){
    var termArrayPlus = []; 
    var termArrayMinus = []; 
    var char = samplePoly.split(""); 
    var charArray = [];

    for (var i = 0; i < char.length; i++){
        if (char[i] != " ") {
            charArray.push(char[i]);
        }
    }
    var zebra;
    var zebraArray = [];
    var indicator = charArray.length;
    for (zebra = 0; zebra < indicator; zebra++){
        if (charArray[zebra] == "^"){
            zebraArray.push(zebra);
        }
    }

    var termArrayExponents = []; 

    for (var a = 0; a < 100; a++){
        if ((charArray[a] == "^")){
            var afterIndex = a + 1; 
            termArrayExponents.push(charArray[afterIndex]);
            charArray.splice(afterIndex, 1);
            termArrayExponents.push(charArray[a]);
            charArray.splice(a, 1);
            var j = a;
            var horse = 0; 
            while (horse != 101029383833838383736638373663773){
                j = j - 1; 
                if ((charArray[j] == "+") || (charArray[j] == "-") || (typeof charArray[j] == 'undefined')) {
                    if ((charArray[j] == "+") || (charArray[j] == "-")) {
                        termArrayExponents.push(charArray[j]);
                        charArray.splice(j, 1);
                    } else if (typeof charArray[j] == 'undefined') {
                        termArrayExponents.push("+");
                        /* 
                        var beforeIndex1 = termArrayExponents[termArrayExponents.length]; 
                        if (termArrayExponents[beforeIndex == ]) */
                    }
                    horse = 101029383833838383736638373663773;
                } else {
                    termArrayExponents.push(charArray[j]);
                    charArray.splice(j, 1);
                }
            }
            termArrayExponents.push("|");
            a = 0; 
        }
    }
        termArrayExponents = termArrayExponents.reverse();

    for (var w = 0; w < charArray.length; w++){
        if (w != 0){
            var beforeIndex = w - 1; 
            if ((charArray[beforeIndex] == "+")) {
                for (var s = w; s != 101029383833838383736638373663773; s++){
                    if ((charArray[s] == "+") || (charArray[s] == "-") || (typeof charArray[s] == 'undefined')) {
                        s = 101029383833838383736638373663773;
                    } else {
                        termArrayPlus.push(charArray[s]);
                    }
                }
                termArrayPlus.push("|");
            }

            if ((charArray[beforeIndex] == "-")){
                for (var y = w; y != 101029383833838383736638373663773; y++){
                    if ((charArray[y] == "+") || (charArray[y] == "-") || (typeof charArray[y] == 'undefined')) {
                        y = 101029383833838383736638373663773;
                    } else {
                        termArrayMinus.push(charArray[y]);
                    }
                }
                termArrayMinus.push("|");
            }
        }

        if (w == 0){
            for (var x = w; x != 101029383833838383736638373663773; x++){
                if ((charArray[x] == "+") || (charArray[x] == "-") || (typeof charArray[x] == 'undefined')) {
                    x = 101029383833838383736638373663773;
                } else {
                    termArrayPlus.push(charArray[x]);
                }
            }
        }
    }   
    //split up exponential and non-exponential functions.

    var newTermArrayPlus = [];
    for(var monk = 0; monk < 50; monk++){
        var afterIndex1 = monk + 1; 
        if (termArrayPlus[afterIndex1] == "x"){
            /*newTermArrayPlus.push(termArrayPlus[monk]); */   
            for (var term = monk; term != 101029383833838383736638373663773; term--){
                if ((termArrayPlus[term] == "|") || (typeof termArrayPlus[term] == 'undefined')) {
                    term = 101029383833838383736638373663773;
                } else {
                    newTermArrayPlus.push(termArrayPlus[term]);
                }
            }
            newTermArrayPlus.push("+");
            newTermArrayPlus.push("|");
        }
    }

    newTermArrayPlus = newTermArrayPlus.reverse();
    //split up non-exponential and exponential functions but multiply everything by -1 at the end.

    var newTermArrayMinus = [];
    for(var monk1 = 0; monk1 < 50; monk1++){
        var afterIndex2 = monk1 + 1; 
        if (termArrayMinus[afterIndex2] == "x"){
            /*newTermArrayPlus.push(termArrayPlus[monk]); */   
            for (var term1 = monk1; term1 != 101029383833838383736638373663773; term1--){
                if ((termArrayMinus[term1] == "|") || (typeof termArrayMinus[term1] == 'undefined')) {
                    term1 = 101029383833838383736638373663773;
                } else {
                    newTermArrayMinus.push(termArrayMinus[term1]);
                }
            }
            newTermArrayMinus.push("-");
            newTermArrayMinus.push("|");
        }
    }

    newTermArrayMinus = newTermArrayMinus.reverse();

    var newTermArrayExponents = [];

    for (var kang = 0; kang < 50; kang++){
        if (termArrayExponents[kang] == "^"){
            var exponentIndex = kang + 1; 
            var originalExponent = termArrayExponents[exponentIndex];
            var newExponent = originalExponent - 1;
            if (newExponent != 0) {
                newTermArrayExponents.push(newExponent);
                newTermArrayExponents.push("^"); 
                newTermArrayExponents.push("x");
            }

            var multiplyExponents = [];
            var newKang = kang - 2;
            var sign = "+";
            for (var gar = newKang; gar != 101029383833838383736638373663773; gar--){
                if ((termArrayExponents[gar] == "|") || (typeof termArrayExponents[gar] == 'undefined') || (termArrayExponents[gar] == "-") || (termArrayExponents[gar] == "+")){
                    gar = 101029383833838383736638373663773;
                    if (termArrayExponents[gar] == "-"){
                        sign = "-";
                    } 
                    if (termArrayExponents[gar] == "+") {
                        sign = "+"; 
                    }
                } else {
                    multiplyExponents.push(termArrayExponents[gar]);
                    console.log("YAYAYAYAYAYAYYAYAYAYYAYAYAYAYYAYAYAYAYYAYAYAYA");
                    console.log(termArrayExponents[gar]);
                }
            }
            /* var str = multiplyExponents.toString(); */

            var str = multiplyExponents.join("");
            console.log(multiplyExponents);
            console.log("NEW CONSTANST YAYAYAYAYAYAYYAYA");
            console.log(str);
            var splitString = str.split("");
            var reverseArray = splitString.reverse();
            var str = reverseArray.join("");

            var newInt = parseInt(str);
            var newConstant = newInt * parseInt(originalExponent); 

            /*
            console.log("ORGIINAL EXPONENT:");
            console.log(originalExponent);
            newConstant = newConstant.toString();
            var splitString1 = newConstant.split("");
            var reverseArray1 = splitString1.reverse(); 
            var newConstant = reverseArray1.join(""); 
            var newConstant = parseInt(newConstant);*/
            
            newTermArrayExponents.push(newConstant);
            newTermArrayExponents.push(sign);
            newTermArrayExponents.push("|");
        }
    }

    newTermArrayExponents = newTermArrayExponents.reverse();
    console.log("NEW TERM ARRAY EXPONENTS");
    console.log(newTermArrayExponents);

    var sumPlus = 0; 
    for (var fira = 0; fira < newTermArrayPlus.length; fira++){
        if (newTermArrayPlus[fira] == "|"){
            var number = [];
            var rod = fira + 1; 
            for (fira1 = rod; fira1 != 101029383833838383736638373663773; fira1++){
                if ((newTermArrayPlus[fira1] == "|") || (typeof newTermArrayPlus[fira1] == 'undefined')){
                    fira1 = 101029383833838383736638373663773;
                } else {
                    number.push(newTermArrayPlus[fira1]);
                }

            }
            var real_Number = number.join('');
            var real_Number = parseInt(real_Number);
            sumPlus = sumPlus + real_Number;
        }
    }

    var differenceMinus = 0; 
    for (var fira2 = 0; fira2 < newTermArrayMinus.length; fira2++){
        if (newTermArrayMinus[fira2] == "|"){
            var number1 = [];
            var rod1 = fira2 + 1; 
            for (fira3 = rod1; fira3 != 101029383833838383736638373663773; fira3++){
                if ((newTermArrayMinus[fira3] == "|") || (typeof newTermArrayMinus[fira3] == 'undefined')){
                    fira3 = 101029383833838383736638373663773;
                } else {
                    number1.push(newTermArrayMinus[fira3]);
                }

            }
            var real_Number1 = number1.join('');
            var real_Number1 = parseInt(real_Number1);

            /*
            var str = multiplyExponents.join('');
            var splitString = str.split("");
            var reverseArray = splitString.reverse();
            var str = reverseArray.join("");
            var str = parseInt(str);
            var newInt = parseInt(str);
            var newConstant = newInt * parseInt(originalExponent); */

            /*var real_Number1 = real_Number1 * (-1); */
            differenceMinus = differenceMinus + real_Number1;
        }
    }

    var finalConstant = sumPlus + differenceMinus; 
    if (finalConstant > 0){
        newTermArrayExponents.push("|");
        newTermArrayExponents.push("+");
        newTermArrayExponents.push(finalConstant); 
    } else if (finalConstant <0) {
        newTermArrayExponents.push("|");
        newTermArrayExponents.push("-");
        newTermArrayExponents.push(finalConstant);
    }

    var finalString = "";
    for (var jar = 0; jar < 100; jar++){
        if (newTermArrayExponents[jar] == "|"){
            var newJar = jar + 1; 
            for (fire = newJar; fire != 101029383833838383736638373663773; fire++){
                if ((newTermArrayExponents[fire] == "|") || (typeof newTermArrayExponents[fire] == 'undefined')){
                    fire = 101029383833838383736638373663773;
                } else {
                    var addString = newTermArrayExponents[fire].toString(); 
                    finalString = finalString + addString;
                }

            }
        }
    }

    if ((finalString.charAt(0) == "+")){
        finalString = finalString.substring(1);
    }

    finalString = finalString;
    console.log("FINAL DERIVATIVE?"); 
    console.log(finalString);

    return finalString;
    }

    function returnFinalDerivative(){
        finalString = nestedDerivative(samplePoly);
        finalString = String(finalString);
        finalDerivative = finalString + finalStringCos + finalStringSin;
        return finalDerivative; 
    }

    return returnFinalDerivative();
    
}

polyDerivative(samplePoly);