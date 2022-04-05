// function declare
function add(num1, num2) {
    return num1 + num2;
}
// function expression
const add2 = function add2(num1, num2) {
    return num1 + num2;
}
// function expressoion(anonymous); akhane function name na dileo eta kaj korbe;
const add3 = function (num1, num2) {
    return num1 + num2;
}
// arrow function
const add4 = (num1, num2) => num1 + num2;

const sum1 = add(12, 18);
const sum2 = add2(20, 10);
const sum3 = add3(5, 25);
const sum4 = add4(7, 23)
console.log('sum1 -- ', sum1);
console.log('sum2 -- ', sum2);
console.log('sum3 -- ', sum3);
console.log('sum4 -- ', sum4)