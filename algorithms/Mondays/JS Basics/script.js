// 1. Print numbers from 1 to 135
function numbersTo135() {
    for (let i = 1; i <= 135; i++) {
        console.log(i);
    }
}
numbersTo135();

// 2. Print odd numbers from 1 to 135
function printOdds() {
    for (let i = 1; i <= 135; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
printOdds();

// 3. Print numbers from 1 to 135 and their sum
function sumTo135() {
    let sumN = 0;
    for (let i = 1; i <= 135; i++) {
        sumN += i;
        console.log('The number is: ' + i + ' and the sum is: ' + sumN);
    }
}
sumTo135();

// 4. Print all elements of an array
function arrayElements(x) {
    for (let i = 0; i < x.length; i++) {
        console.log(x[i]);
    }
}
let arr = [1, 4, 2, 12];
arrayElements(arr);


//5. Find Max

function findMax(x) {
    let max =x[0];
    for (let i =1; i < x.length; i++) {
        if (x[i] > max) {
            max=x[i];
        }

    }
    console.log(max)
}
let newarr=[1,2,5,22,-40,-64,604,-220,122];
findMax(newarr);

//6. Array avreage

function arrayAverage(x) {
    let sum = 0;
    for(let i=0 ;i<x.length;i++){
        sum += x[i];
    }
    let avreage=sum/x.length;
    console.log('the avreage of the array is: '+avreage);
}

let arrax=[1,2,3];
console.log('the array is : '+arrax);
arrayAverage(arrax);

//7 Remove negative number
function removeNegative(x) {
    for(let i=0; i<=x.length;i++){
        if(x[i]<0){
            x[i]=0;
        }
    }
    console.log(x);
}

let arrWithNegative=[-1,-2,522,-3,90,-4,-5,22,40];
console.log(arrWithNegative);
removeNegative(arrWithNegative);

//8. Negative values into Strings
function negativeToString(x) {
    console.log(x);
    for (let i = 0; i < x.length; i++) {
        if (x[i] < 0) {
            x[i]='Turing'
        }
    }
    console.log(x);
}

let myArray=[12,-33,-44,-44,4,-143];
negativeToString(myArray);

