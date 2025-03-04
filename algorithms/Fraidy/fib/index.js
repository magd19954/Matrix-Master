function fib (num){
    let last=1;
    let fisrt=0;
    let second=0
    for(let i=2;i<=num;i++){
        second=fisrt;
        fisrt=last;
        last=fisrt+second;
    }
    return last;
}

console.log(fib(5));
console.log(fib(4));
console.log(fib(3));
console.log(fib(10));