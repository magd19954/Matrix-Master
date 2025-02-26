function FirstLetter(x){
return x.charAt(0).toUpperCase()+x.slice(1);
};

function capitalFirstLowerRest(string){
    let finalString='';
    let string2=string.toLowerCase();
    let slicedString=string2.split(" ");
    for(let i = 0 ; i < slicedString.length ; i++){
        finalString=finalString+FirstLetter(slicedString[i])+" ";
    }
    return finalString;
}

console.log(capitalFirstLowerRest("hI eVEryOne thIS MaJD'S coDE, ahMAD iF your READ This LET me KNOW, pleasE :)"));
