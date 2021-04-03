var a = 5;
var b = 8;
console.log('before swap : a = ' ,a , 'b = ' , b);
 temp = a ;
 a = b ;
 b = temp; 
 console.log('after swap : a = ' ,a , 'b = ' , b);



 var x = 10;
 var y = 20;
 x = x + y;
 y = x - y;
 x = x - y;
 console.log('after swap : x = ' ,x , 'y = ' , y);


 var r = 5;
 var u = 10;

 [ r , u] = [u , r];
 console.log('after swap : u = ' ,u , 'r = ' , r);