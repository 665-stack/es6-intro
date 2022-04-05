const add = (num1, num2) => num1 + num2;
const sum = add(22, 8);
console.log('sum -- ', sum);
//=========================
const multiply = (num1, num2, num3) => num1 * num2 * num3;
const multiplyResult = multiply(5, 10, 5);
console.log('multiplyResult -- ', multiplyResult)
//==============================
const fiveTimes = (num) => num * 5;
const fiveTimesResult = fiveTimes(10);
console.log('fiveTimesResult -- ', fiveTimesResult);
//akta parameter thakle bracket ba () deyar dorkar nai;
const tenTimes = num => num * 10;
const tenTimesResult = tenTimes(10);
console.log('tenTimesResult -- ', tenTimesResult)
//ar jhodi function er parameter nai thake
const getName = () => 'Brandon Sam';
const name = getName();
console.log('name -- ', name)
// multiline code hole {} diye korte parbo;
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}
const doMathResult = doMath(10, 5);
console.log('doMathResultn -- ', doMathResult);
//====================
document.getElementById('id').addEventListener(event => {

})

