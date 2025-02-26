function powerN(number, n) {
    if (number === 0) {
        return 0;
    }
    if (n === 0) {
        return 1;
    }
    if (n === 1) {
        return number;
    }
    return number * powerN(number, n - 1);
}

console.log(powerN(2, 2));
console.log(powerN(2, 5));
console.log(powerN(2, 3));
console.log(powerN(3, 0));
console.log(powerN(0, 2));
console.log(powerN(3, 4));
