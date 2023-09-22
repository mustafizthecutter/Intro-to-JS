var phone = {
    model: 'poco',
    color: 'red',
    size: 'medium',
    memory: 212,
    weight: '500gm'
}
// var weightUpdate = 'color'

var memoryCount = phone.memory;
// console.log(memoryCount);
var memoryCount2 = phone['memory'];
// console.log(memoryCount2);
// var weightUpdate = 'color'
var weightUpdated = phone[weightUpdate];
// console.log(weightUpdated, weightUpdate)
var properties = Object.keys(phone);
// console.log(properties);
var propertiesValues = Object.values(phone);
// console.log(properties, propertiesValues);


// phone.size = "large";
// console.log(phone)

// console.log(phone.weight, phone.color);

// set the keys value in different ways

phone.memory = 512;
phone['memory'] = 1024;
phone[weightUpdate] = 'yellow'
console.log(phone);