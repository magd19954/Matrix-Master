
//itrative factorial

function factorial(n) {
    let fact=1;
    for (let i = n; i >=1; i--) {
        fact=fact*i;
    }
    return fact;
}

console.log (factorial(5));


//recursiv factorial
let recfact = 1;

function recursiveFactorial(n) {
    if (n === 1 || n === 0) {
        return recfact;
    }
    recfact = n * recfact;
    n=n-1;
    return recursiveFactorial(n);
}

console.log(recursiveFactorial(6));


