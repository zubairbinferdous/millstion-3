

var mark = [44, 4, 66, 78, 90, 35, 67, 98, 88, 99];
var hight = [];

for (let i = 0; i < mark.length; i++) {
    const element = mark[i];
    if (element > hight) {
        hight = element;
    }
}
console.log('big number from array :', hight);


