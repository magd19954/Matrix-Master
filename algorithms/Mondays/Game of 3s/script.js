//I created a recursive function
//  where the function continually applies changes to the input and calls itself with the updated input
//  and we will keep applying that until x = 1.
function game(x){
    if(x ===1){
        console.log(x);
        return;
    }
    if(x % 3===0){
        console.log(x/3 +' 0')
        x=x/3;
        game(x);
    }
    else if(x % 3===1){
        console.log(x +' -1');
        x=x-1;
        game(x);

    }
    else if(x%3===2){
        console.log(x +' +1');
        x=x+1;
        game(x);

    }

}

game(106);