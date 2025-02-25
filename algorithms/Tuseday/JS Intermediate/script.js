//1.Addition
function addition(){
    let sum=0;
    for(let i=200;i<=2700;i++){
        if ((i%3===0)^(i%5===0)){
            sum+=i;
        }
    }
    console.log(sum);
}

addition();

//2.shift the values

function shiftthevalues(x) {
    let r = [];
    for (let i = x.length - 1; i >= 0; i--) {
        r.push(x[i]);
    }
    console.log("Original:", x);
    console.log("Reversed:", r);
    return r;
}

let arr = [7, 4, 22, 0, -7, 1];
shiftthevalues(arr);


 //3.FizzBuzz

 function fizzBuzzArray() {
    let result = [];

    for (let i = 1; i <= 135; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz"); 
        } else if (i % 3 === 0) {
            result.push("Fizz"); 
        } else if (i % 5 === 0) {
            result.push("Buzz"); 
        } else {
            result.push(i); 
        }
    }

    console.log(result); 
    return result;
}

fizzBuzzArray();


//4.Fibonacci

function sumFibonacci(limit) {
    let a = 0, b = 1;
    let sum = 0;

    while (a < limit) {
        sum += a;
        let next = a + b;
        a = b;
        b = next;
    }

    return sum;
}

console.log(sumFibonacci(1000000));

//5.Remove the Negative

function removeNegative(x){
    let myarr=[];
    console.log(x);
for(let i=0;i<x.length;i++){
    if(x[i]>=0){
        myarr.push(x[i])
    }
}
console.log(myarr);
}

let art=[2,-9,3,5,-7,-10,-20,1];
removeNegative(art);

//6.Communist Censorship
function change(string) {
    let x = ['Man', 'I', 'Love', 'The', 'Matrix', 'Program'];
    let temp = '';
    
    for (let i = 0; i < x.length; i++) {
        if (string === x[i]) {
            temp = '*'.repeat(x[i].length);
            x[i] = temp;
        }
    }
    console.log(x);
}

change("Matrix");



