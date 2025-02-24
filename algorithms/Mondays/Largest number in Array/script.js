//1 .array of largest numbers
function arrayOfLargestNumbers(array){
    let largestNumbers=[]
    for(let i=0;i<array.length;i++){
        let max=0;
        let innerArray=array[i];
        for(let j=0;j<innerArray.length;j++){
            if(innerArray[j]>max){
                max=innerArray[j];
            }
        }
        largestNumbers.push(max);
    }
    console.log(largestNumbers);
    return largestNumbers;

}

let NewArray=[[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
console.log(NewArray);
arrayOfLargestNumbers(NewArray);

//2.