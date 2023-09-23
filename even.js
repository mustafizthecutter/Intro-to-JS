function evenOdd(number) {
    const getNumber = number % 2;
    if (getNumber === 0) {
        return true;
    }
    return false;
}
const isEven = evenOdd(23);
console.log(isEven);