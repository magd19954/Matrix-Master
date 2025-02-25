function stringLongest(string){
    let x= string.split(' ');
    let longest=0;
    for (let i=0 ; i<x.length;i++){
        if(x[i].length>longest){
            longest=x[i].length;
        }
    }
    return longest;
}

let myString='The quick brown fox jumped over the lazy dog';
console.log(stringLongest(myString));
myString='May the force be with you';
console.log(stringLongest(myString));
