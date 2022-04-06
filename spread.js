const numbers = [23, 65, 99, 21, 34];
// console.log(numbers);
//akhaner console log e array theke shogkha gulo ke alada kore normal shogkha banano hoyce ei ... diye;
// console.log(...numbers)
//then sei normal shogkha theke boro shogkhe ber kora hoice;
const max = Math.max(...numbers);
// console.log(max)

// more uses for spread operator;------ 
//akhane ami noton var make korteci ager var er man diyei, akhon ami cacci na je ager var e push kora number a new var e na ashok. taile eibabe likte pari;akhane shodu ager var er man niye new akta var make kora hoice, new var akhon ami onk kicui korete parbo;
const numbers2 = [11, ...numbers, 88]
numbers.push(55);
console.log('numbers -- ', numbers);
console.log('numbers2 -- ', numbers2);


