const year = 2024;
let remainder = year % 4;
console.log(remainder);

if (remainder == 0) {

    console.log('ok this is leap year');

} else {

    console.log('ok this is not leap year --- no');
}





function leapYear(year) {

    let remainder = year % 4;

    if (remainder == 0) {

        return true;

    } else {

        return false;
    }

}

var result = leapYear(2555);
console.log(result);