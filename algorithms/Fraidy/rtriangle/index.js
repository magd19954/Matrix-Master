function triangle(n) {
    if (n === 0) {
        return 0;
    }
    return n + triangle(n - 1);
}

console.log(triangle(4)); 
console.log(triangle(7)); 
