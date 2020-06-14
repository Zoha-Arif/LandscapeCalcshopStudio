var sampleInt = "3x^2 - 2x - 4 + 5x - 3 + 4x^2 + 3x^3 + 7x - 9x + 8x^4 - 9x^3 + 9 + 4894 -3x + 3x + 47x"

/* LIMITATIONS: DO NOT USE PARENTHESIS. DO NOT USE COTAN, TAN, SEC OR WHATNOT. */
/*List of things left to do:
-integral for polynomials 
-integral for sin + cos 
-derivative for sin + cos 
-then we need to plot the integral and derivave. 
-finally, make it all look p spicy. 

*/
function polyIntegral(sampleInt){

    /*
    if (samplePoly.includes("sin", 0)){
        for ()
        WE'LL DO THIS LATER BOOMER!
    } */


    var termArrayPlus = []; 
    var termArrayMinus = []; 
    var char = sampleInt.split(""); 
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
            if ((charArray[beforeIndex] == "+")){
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
    console.log("THE FINAL PRODUCT:");
    console.log(termArrayExponents);
    console.log(termArrayMinus); 
    console.log(termArrayPlus);

    //split up exponential and non-exponential functions.

    var newTermArrayPlus = [];
    for(var monk = 0; monk < 50; monk++){
        var afterIndex1 = monk + 1; 
        if (termArrayPlus[afterIndex1] == "x"){
            newTermArrayPlus.push("2");
            newTermArrayPlus.push("^");
            newTermArrayPlus.push("x");
            /*newTermArrayPlus.push(termArrayPlus[monk]); */   

            var multiplyExponents = [];
            for (var term = monk; term != 101029383833838383736638373663773; term--){
                if ((termArrayPlus[term] == "|") || (typeof termArrayPlus[term] == 'undefined')) {
                    term = 101029383833838383736638373663773;
                } else {
                    multiplyExponents.push(termArrayPlus[term]);
                }
            }
            var str = multiplyExponents.toString();
            var newInt = parseInt(str);
            var newConstant = newInt / (2);
            newTermArrayPlus.push(newConstant);
            newTermArrayPlus.push("+");
            newTermArrayPlus.push("|");
        }
    }

    newTermArrayPlus = newTermArrayPlus.reverse();
    console.log("COMPLETE PLUS");
    console.log(newTermArrayPlus);
    //split up non-exponential and exponential functions but multiply everything by -1 at the end.

    var newTermArrayMinus = [];
    for(var monk1 = 0; monk1 < 50; monk1++){
        var afterIndex2 = monk1 + 1; 
        if (termArrayMinus[afterIndex2] == "x"){
            newTermArrayMinus.push("2");
            newTermArrayMinus.push("^");
            newTermArrayMinus.push("x");
            /*newTermArrayPlus.push(termArrayPlus[monk]); */  
            
            var multiplyExponents = [];
            for (var term1 = monk1; term1 != 101029383833838383736638373663773; term1--){
                if ((termArrayMinus[term1] == "|") || (typeof termArrayMinus[term1] == 'undefined')) {
                    term1 = 101029383833838383736638373663773;
                } else {
                    multiplyExponents.push(termArrayMinus[term1]);
                }
            }

            var str = multiplyExponents.toString();
            var newInt = parseInt(str);
            var newConstant = newInt / (2);
            newTermArrayMinus.push(newConstant);
            newTermArrayMinus.push("-");
            newTermArrayMinus.push("|");
        }
    }

    newTermArrayMinus = newTermArrayMinus.reverse();
    console.log("COMPLETE Minus");
    console.log(newTermArrayMinus);

    var newTermArrayExponents = [];

    for (var kang = 0; kang < 50; kang++){
        if (termArrayExponents[kang] == "^"){
            var exponentIndex = kang + 1; 
            var originalExponent = termArrayExponents[exponentIndex];
            var newExponent = parseInt(originalExponent) + 1;
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
                }
            }
            var str = multiplyExponents.toString();
            var newInt = parseInt(str);
            var newConstant = newInt / (newExponent);
            newTermArrayExponents.push(newConstant);
            newTermArrayExponents.push(sign);
            newTermArrayExponents.push("|");
        }
    }

    newTermArrayExponents = newTermArrayExponents.reverse();

    console.log("FINAL EXPONENTS:");
    console.log(newTermArrayExponents);

}

polyIntegral(sampleInt);