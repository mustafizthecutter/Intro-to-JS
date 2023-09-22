var phone = {
    model: 'poco',
    color: 'red',
    size: 'medium',
    memory: 212,
    weight: '500gm'
}

var phoneUpdate = Object.entries(phone);
console.log(phoneUpdate);


// var propertiesName = Object.keys(phone);
// var propertiesValues = Object.values(phone);
// console.log(propertiesName, propertiesValues);

// for (var i = 0; i < propertiesName.length; i++) {
//     var phoneProperties = propertiesName[i];
//     var phoneValues = phone[phoneProperties];
//     console.log(phoneProperties, phoneValues);
// }


// for in loop
// for (var phoneProperties in phone) {
//     var phoneValues = phone[phoneProperties];
//     console.log(phoneProperties, phoneValues);
// }