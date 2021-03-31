// ****** for loop ************//


// 5! = 1*2*3*4*5;

// var factory = 1;
// for (let i = 1; i < 10; i++) {

//     factory = factory * i;
//     console.log(factory , i);

// }


// function factory(n) {

//     var factory = 1;
//     for (let i = 1; i <= n; i++) {
//         factory = factory * i;
//     }
//     return factory;
// }

// var result = factory(5);
// console.log(result);



// ****** while loop ************//


// var i = 1;
// var factory = 1;
// while (i <= 3) {
//     factory = factory * i;
//     i++;
// }
// console.log(factory);




// function factorial(N) {

//     var i = 1;
//     var factory = 1;
//     while (i <= N) {
//         factory = factory * i;
//         i++;
//     }
//     return factory;


// }

// var result = factorial(5);
// console.log(result);


// ****** Recursive ************//

// 5! = 1*2*3*4*5
// 6! = (6-1)! * 6 
// n! = (n-1)! * n 


function factories(n) {

    if (n == 0){
        return 1;
    }else{

        return n * factories(n-1);
    }
    
}

var result = factories(5);
console.log(result);