var samplePoly = "3x^2 - 2x - 4 + 5x - 3 + 4x^2 + 3x^3 + 7x - 9x + 8x^4 - 9x^3 + 9 + 4894 -3x + 3x + 47x"

var termArrayPlus = []; 
var termArrayMinus = []; 

function polyDerivative(samplePoly){
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
        /*
        console.log(termArrayExponents);
        console.log("CHARARRAY"); 
        console.log(charArray);*/

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
    console.log("COMPLETE PLUS");
    console.log(newTermArrayPlus);
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
    console.log("COMPLETE Minus");
    console.log(newTermArrayMinus);

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
                }
            }
            var str = multiplyExponents.toString();
            var newInt = parseInt(str);
            var newConstant = newInt * originalExponent; 
            newTermArrayExponents.push(newConstant);
            newTermArrayExponents.push(sign);
            newTermArrayExponents.push("|");
        }
    }

    newTermArrayExponents = newTermArrayExponents.reverse();

    console.log("FINAL EXPONENTS:");
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

    console.log("SUMPLUS");
    console.log(sumPlus);

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
            /*var real_Number1 = real_Number1 * (-1); */
            differenceMinus = differenceMinus + real_Number1;
        }
    }

    console.log("DIFFFPLUS");
    console.log(differenceMinus);

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

    console.log("SJKHKHSA");
    console.log(newTermArrayExponents);
}

polyDerivative(samplePoly);