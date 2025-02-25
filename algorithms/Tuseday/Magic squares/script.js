function diagonal(x){
    let dia1=x[0]+x[4]+x[8]
    let dia2=x[2]+x[4]+x[6];
    if(dia1===dia2)
        {
            console.log('the array  ('+x +')  True');
        }
    else{
        console.log('the array ('+x +')  False');

        }
};
let dd=[2, 7, 6, 9, 5, 1, 4, 3, 8];
diagonal(dd);