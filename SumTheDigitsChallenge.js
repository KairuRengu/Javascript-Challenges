var numberString = prompt("Please enter a number string");
var sumTheDigits = function(numberString){
    while(numberString.length>1){
        var answer = 0;
        for(var i = 0 ; i<numberString.length ; i++){
            answer += Number(numberString[i]);
        }
        numberString=answer.toString();
    }
    return numberString;
}

numberString = sumTheDigits(numberString);
console.log(numberString);