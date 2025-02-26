function factorial(x){
    let result =1
    for(let i=x ; i>=1;i--){
        result = result * i;

    }
    return result;
}

console.log(factorial(5));