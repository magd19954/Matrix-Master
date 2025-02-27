function isPrime(x){
    if(x<=1){
        return false;
    }
    for (let i =2;i<x;i++){
        if(x%i===0){
            return false;
        }
    }
    return true;
}

function sumPrime(y){
    let sum =0;
    if(y===0){
        return 0;
    }
    for (let j=1;j<=y;j++){
        if(isPrime(j)==true){
            sum=sum+j;

        }
    }
    return sum;
}


console.log(sumPrime(1))
console.log(sumPrime(3))
console.log(sumPrime(10))
console.log(sumPrime(977))