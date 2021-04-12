function reversString(str) {
    
    var reverse = '';

    for (var i = 0; i < str.length; i++){

        var char = str[i];
        reverse = char + reverse;

    }
    return reverse;
}

var statement =  'hello big ass';
var result = reversString(statement);
console.log(result);