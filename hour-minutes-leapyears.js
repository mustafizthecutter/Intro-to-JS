// function getHours(hours) {
//     const convertedMinutes = hours * 60;
//     return convertedMinutes;
// }
// const minutes = getHours(3);
// console.log(minutes);

function findLeapYear(years) {
    let leapYears = [];
    for (let i = 0; i < years.length; i++) {
        let index = i;
        let yearsValue = years[i];
        if (yearsValue % 4 === 0) {
            leapYears.push(yearsValue);
        }
    }
    return leapYears;
}
let givenYears = [2023, 2024, 2025, 2028, 2030];
let getLeapYears = findLeapYear(givenYears);
console.log(getLeapYears);