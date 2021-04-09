var num = 2.5555555;
var result = Math.floor(num);
var result1 = Math.random(num);
var result3 = Math.round( num);
var result2 = Math.ceil (num);

console.log('floor' , result);
console.log('random' ,result1);
console.log('round' ,result3);
console.log('ceil' ,result2);


for (let i = 0; i < 4 ; i++) {
    
    var random = Math.random() * 6;
    var ludo = Math.round(random);
    console.log(ludo);
    
}

