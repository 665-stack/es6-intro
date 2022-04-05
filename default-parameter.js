//akhane 2ra parameter ace. akhone jodi variable er modde 1ta ne dei; taile ki ki system a sheta solve kora jay tai dekhano hocce; and es6 asher por paremeter set korar jaygayei default babe set kore dite pari; er mane holo jodi sei parameter er man variable er maddome set kora na thake taile sei man ke dhore nibe;
function add(num1, num2 = 10) {
    //system 1;
    // num2 = num2 || 0;
    //system 2;
    // if (num2 == undefined) {
    //     num2 = 0;
    // }
    const total = num1 + num2;
    return total;
}
const result = add(12);
console.log(result)

///=========function default parameter for not provided values;============
function fullName(first, last = 'Chowdhury') {
    const name = first + ' ' + last;
    return name;
}
const name = fullName('Shahin')
console.log(name)
