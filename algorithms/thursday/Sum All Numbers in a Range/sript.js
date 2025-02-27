function arraysum(c){

    let x=0;
    let y=0;
    let sum =0;
    if (c[0]===c[1]){
        return c[0];
    }

    else if(c[0]>c[1]){
        x=c[0];
        y=c[1];
    }

    else{
        x=c[1];
        y=c[0];
    }

    for(let i =y;i<=x;i++){
        sum+=i;
    }
    return sum;
}

console.log(arraysum([1,5]));
console.log(arraysum([5,1]));
console.log(arraysum([5,5]));
console.log(arraysum([1,4]));