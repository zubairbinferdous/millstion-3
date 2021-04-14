function reversString(string) {
    
    var reverse = '';

    for (var i = 0; i < string.length; i++){

        var char = string[i];
        reverse = char + reverse;

    }
    return reverse;
}

var statement =  'hello big ass';
var result = reversString(statement);
console.log(result);

var food = reversString('what u need to do');
console.log(food);