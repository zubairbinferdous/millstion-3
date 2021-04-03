var business = 500;
var minister = 450;
var bcs      = 300;

if ( business > minister) {
     if ( business > bcs) {
        console.log("Business is big")
     }else{
         consol.log('bcs is bigger');
     }
}else{
    if ( minister > bcs) {

        console.log("minster is big")
        
    }else{
        consol.log('bcs is big')
    }
}


// **************************

var max = Math.max(business,bcs,minister);
console.log(max);
