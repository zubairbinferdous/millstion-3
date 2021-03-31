// var n = 8;
// for (let i = 2; i < n ;  i++) {

//     console.log(i , n%i)

//     if ( n % i == 0) {
//         console.log('not a prime number');
//         break;
//     }
    
// }

function prime(n) {

    for (let i = 2; i < n ; i++) {
        
        if (n % i == 0) {
            return 'not prime number';
        }  
    }

    return 'prime number';
    
}

var result = prime(4);
console.log(result); 