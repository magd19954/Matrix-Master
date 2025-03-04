function thirdHighest (input){
    var first =0;
    var second =0;
    var third=0;
    
    for(var i =0; i<input.length; i++){
        if (input[i] > first){
            third = second;
            second = first;
            first = input[i];
        }
        else if (input[i] > second) {
            third = second;
            second = input[i];  
        }
        else if (input[i] > third) {
            third = input[i];
        }
    }
    return third;
}

console.log(thirdHighest([2,5,3,1,4]));