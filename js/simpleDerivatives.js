var samplePoly = "3x^2 - 2x - 4 + 5x - 3 + 4x^2 + 3x^3 + 7x - 9x + 8x^4 - 9x^3 + 9 + 4894"

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
        console.log("AAAAAA");
        console.log(charArray[a]);
        console.log(a);
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
                        console.log(termArrayExponents);
                        console.log("RUNNING!");
                        termArrayExponents.push("+");
                        console.log(termArrayExponents);
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
    for(var monk = 0; monk < 20; monk++){
        var afterIndex1 = monk + 1; 
        if (termArrayPlus[afterIndex1] == "x"){
            newTermArrayPlus.push(termArrayPlus[afterIndex1]);
            newTermArrayPlus.push(termArrayPlus[monk]);   
            for (var term = monk; term != 101029383833838383736638373663773; term = term - 1){
                if (termArrayPlus[term] == "|") {
                    term = 101029383833838383736638373663773;
                } else {
                    newTermArrayPlus.push(termArrayPlus[term]);
                }
            }
        }
    }
    console.log("COMPLETE PLUS");
    console.log(newTermArrayPlus);
    //split up non-exponential and exponential functions but multiply everything by -1 at the end.
}

polyDerivative(samplePoly);