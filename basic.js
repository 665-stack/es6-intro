//variable
var deposit = 400;
//condition
if (deposit > 500) {

}
else if (deposit < 200) {

}
else if (deposit == 500) {

}
else if (deposit != 500) {

}
else if (deposit >= 500) {

}
else if (deposit <= 500) {

}
else {

}

// array
const numbers = [23, 53, 234, 98, 76, 4, 120, 490, 60, 43];
const numberCount = numbers.length;
numbers.pop();
numbers.push(222);
numbers[2] = 555;
//check whether 222 inclueded in the array
if (numbers.indexOf(222) != -1) {

}
if (numbers.includes(222)) {

}

//loop
//while, for
for (const number of numbers) {

}
//function
function fullName(first, second) {
    const name = first + ' ' + second;

}
const person = fullName('Rahim', 'Ali');

//object
const bottle = {
    color: 'gray',
    contain: 'water',
    price: 50,
    space: '1000ml'
}
