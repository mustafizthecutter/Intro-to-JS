// All the Logics of being a Loop Year
function getLeapYear(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return true;
    }
    else {
        return false;
    }
}
const year = getLeapYear(2021);
console.log(year);