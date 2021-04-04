

var mark = [44,4,66,78,90,35,67,98,88,99];
var max = [];
for (let i = 0; i < mark.length; i++) {
    const element = mark[i];

    if ( element > max) {
        max = element;
    }
    
}

console.log('hight number :', max)
