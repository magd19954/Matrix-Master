function isPalindrome(x){
    let y = x.toLowerCase().split(' ').join('').trim();
    let z=y.split('').reverse().join('');
    if(z===y){
        return true;
    }
    return false;

}

console.log(isPalindrome("Hello everyone is that ok?"));
console.log(isPalindrome("hoh"));
console.log(isPalindrome("santa at nasa"));
console.log(isPalindrome("1234567890987654321"));
