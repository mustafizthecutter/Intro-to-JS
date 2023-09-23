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
function getOddNumbers(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        // console.log(i);
        let index = i;
        let indexValue = numbers[i];
        // console.log(index, indexValue);
        if (indexValue % 2 !== 0) {
            console.log(index, indexValue);
            oddNumbers.push(indexValue);
        }

    }
    return oddNumbers;
}
let myNumbers = [2, 69, 25, 27, 36, 19, 45];
const oddNumbers = getOddNumbers(myNumbers);
console.log(oddNumbers);
let oddNumbersSum = sumOfArray(oddNumbers);
// console.log(result);
console.log(oddNumbersSum);