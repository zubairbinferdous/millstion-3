var Name = [44, 44, 66, 78, 90, 67, 67, 90 , 88]
var UniqueName = [];

for (let i = 0; i < Name.length; i++) {

    const element = Name[i];
    var index = UniqueName.indexOf(element);
    if ( index == -1) {
        UniqueName.push(element);
    }
    
}