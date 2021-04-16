
//!5= 1*2*3*4*5

function factorial(num) {
    
    var fact = 1;

    for (let i = 1; i <= num; i++) {
        
        fact = fact * i ;
        
    }
    return fact;

}

var result = factorial(5);
console.log('result' , result);


// #############################

function factorialRecursive(mum){

    if ( mum == 1) {

       return 1;

    }else {

        return mum * factorialRecursive(mum - 1);

    }

}

var result = factorialRecursive(5);
console.log('Recursive-result' , result);