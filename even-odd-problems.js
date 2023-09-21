// even numbers
// var number = 2;
// while (number <= 20) {
//     console.log(number);
//     number = number + 2
// }
// find odd and even numbers from 1 to 7

var a = 1;
while (a <= 7) {
    if (a % 2 == 0) {
        console.log(a, 'is even');
    }
    else {
        console.log(a, 'is odd');
    }
    a++;
}