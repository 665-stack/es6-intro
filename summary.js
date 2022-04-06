
//const can't be reassigned, but we can use/modify the value of the array;
const babe = 'koolsum begum';
//let can be reassigned, we can modify all of thing;
let device = 'tecno spark 6';
//=============================
//use default parameter 
function getName(first, last = 'Chowdhury') {
    return first + ' ' + last;
}
const setName = getName('Shahin')
//==============================
// template string 
const myPeople = `My lovely person is are ${babe} and his hubby is ${setName}. That's mean me.`;
console.log(myPeople)
//===========================
//arrow function
const getName2 = (first, last) => first + ' ' + last;
// //more example
// const fiveTimes = x = x * 5;
// //more example
// const bigArrowFunc = (x, y, z) => {
//     const firstPart = x + y;
//     const secondPart = y * z;
//     const thirdPart = x / z;
//     const result = (firstPart + secondPart) * thirdPart;
//     return result;
// }
//======================
// spread operator
// most lowest number in this array
const numbers = [29, 43, 65, 5, 98, 23];
const min = Math.min(...numbers);
console.log(min)