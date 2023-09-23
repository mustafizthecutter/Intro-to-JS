function milesTokilo(miles) {
    let km = miles * 1.60934;
    return km;
}

let getKm = 25;
let getMiles = milesTokilo(getKm);
console.log(getMiles);