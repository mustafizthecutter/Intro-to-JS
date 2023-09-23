function sumOfArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const indexValue = numbers[i];
        sum = sum + indexValue;
        // console.log(index, indexValue, sum);
    }
    return sum;
}
let myNumbers = [2, 69, 25, 27, 36, 19, 45];
let result = sumOfArray(myNumbers);
console.log(result);