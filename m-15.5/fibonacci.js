 function fibonacciIt(num) {

    var fibo = [ 1 , 1 ];
    for (let i = 2; i < num; i++) {

        var nextFibo = fibo[ i - 1] + fibo[ i- 2];
        fibo.push(nextFibo);
       
    }
    return fibo
     
 }

 var result = fibonacciIt(10);
 console.log(result);


 console.log('two way to solve problem');

 function fibonacciRec(num){
     if (num == 0) {
         return[1];
     }
     if ( num == 1) {
         return[ 1 , 1 ]
     }

     var fibo = fibonacciRec(num - 1);
     var nextFibo = fibo[num - 1] + fibo[ num - 2];
     fibo.push(nextFibo);

     return fibo;

 }

 var result = fibonacciRec(10);
 console.log(result);