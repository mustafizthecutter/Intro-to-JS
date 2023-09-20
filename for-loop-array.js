// var i = 0;
// while (i < 7) {
//     console.log(i);
//     i++;
//     if (i > 5) {
//         break;
//     }
// }
// for (i = 0; i < 9; i++) {
//     console.log(i);
//     if (i > 3) {
//         continue;
//     }
// }
// for (i = 0; i < 7; i++) {
//     console.log(i);
// }
var numbers = [25, 36, 98, 75, 68, 43, 16, 17, 13]
for (i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 43) {
        continue;
    }
    console.log(number);
}

// var cats = ['montu', 'jontu', 'pintu', 'tinku', 'chuppu', 'chomchom'];
// for (i = 0; i < cats.length; i++) {
//     var cat = cats[i];
//     if (cat == 'chuppu') {
//         break;
//     }
//     console.log(cat);
// }