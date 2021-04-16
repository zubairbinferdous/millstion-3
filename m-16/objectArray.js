var friend = [44, 66, 78, 90, 35, 67, 98, 88, 99];

var me = {
    age:  20,
    Name: 'zubair',
    height: 5.5,
    color : 'black'
}

var myAge = me.age;
var myColor = me['color'];

var looking = 'height';
var myHeight = me[looking];

console.log(myAge);
console.log(myColor);
console.log(myHeight);


me.color = 'yellow';
console.log(me);
