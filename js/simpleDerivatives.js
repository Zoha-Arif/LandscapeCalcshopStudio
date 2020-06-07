var samplePoly = "3x^2 + 2x - 4"

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

    for (var w = 0; w < charArray.length; w++){
        if (w != 0){
            var beforeIndex = w - 1; 
            if ((charArray[beforeIndex] == "+")){
                for (var s = w; s != 101029383833838383736638373663773; s++){
                    if ((charArray[s] == "+") || (charArray[s] == "-")) {
                        s = 101029383833838383736638373663773;
                    } else {
                        termArrayPlus.push(charArray[s]);
                    }
                }
            }

            if ((charArray[beforeIndex] == "-")){
                termArrayMinus.push(charArray[w]);
                for (var y = w; y != 101029383833838383736638373663773; y++){
                    if ((charArray[y] = "+") || (charArray[y] = "-")) {
                        y = 101029383833838383736638373663773;
                    } else {
                        termArrayMinus.push(charArray[y])
                    }
                }
            }
        }

        if (w == 0){
            termArrayPlus.push(charArray[w]);
            for (var x = w; x != 101029383833838383736638373663773; x++){
                if ((charArray[x] = "+") || (charArray[x] = "-")) {
                    x = 101029383833838383736638373663773;
                } else {
                    termArrayPlus.push(charArray[x])
                }
            }
        }
        console.log(termArrayPlus);
        console.log(termArrayMinus);
    }   

    //split up exponential and non-exponential functions.
    for (var a = 0; a < termArrayPlus.length; a++){

    }

    //split up non-exponential and exponential functions but multiply everything by -1 at the end.
}

polyDerivative(samplePoly);