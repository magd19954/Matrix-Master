function bubbleSort(x){
let temp=0
for(let i=0;i<x.length-1;i++){
    for(let j=0;j<x.length-i-1;j++){
        if(x[j]>x[j+1]){
            temp=x[j];
            x[j]=x[j+1];
            x[j+1]=temp;
        }
    }
}
return x;

}

let newArray=[-10,1,55,-200,12,0,55,100,231];
console.log(newArray);
let sortedArray=bubbleSort(newArray);
console.log(sortedArray);