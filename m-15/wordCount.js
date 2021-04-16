var speech = 'i am a good person. i have some good friend.';
var count = 0;
for (let i = 0; i < speech.length; i++) {
     var char = speech[i];
     if (char == ' ' && speech[i-1] != ' ') {
         count++;
     }
    
}

count++;

console.log(count);