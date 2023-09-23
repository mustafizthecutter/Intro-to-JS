function getLeapYear(year) {
    const getYear = year % 4;
    if (getYear === 0) {
        return true;
    }
    else {
        return false;
    }
}
const isLeapYear = getLeapYear(2023);
console.log(isLeapYear);