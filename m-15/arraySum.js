
var number = [44, 4, 66, 78, 90, 35, 67, 98, 88, 99];
var total = 0;

for (let i = 0; i < number.length; i++) {

    var element = number[i];
    total = total + element;

}

console.log('total number ::', total);



// #########################################################################


function getArraySum(numbers) {

    var total = 0;

    for (let i = 0; i < numbers.length; i++) {

        var element = numbers[i];
        total = total + element;

    }

    return total;

}

var number = [40, 45, 65, 75, 90, 35, 65];
var result = getArraySum(number);
console.log('hight number from array' , result);

var total = getArraySum([44, 4, 66,]);
console.log('hight number ' , total);