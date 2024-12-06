console.log("My index.js");

// іменований експорт "export {add, sub};"
// дефолтний експорт "export default {add, sub};" Лише один. Рідко використовують



// ========== Іменований експорт: export default ===========

console.log("Іменований експорт: export default index");
import {d} from './js/01-test';
console.log(d); // 555




// import {add} from './js/01-test';
// import * as data from './js/01-test';

// function add(a, b) {
//     return a+b;
// }

// console.log(`Summ a+b=${add(3, 7)}`);
// console.log(`Summ a+b=${data.add(3, 7)}`);





// ========== Дефолтний експорт: export default ===========

console.log("Дефолтний експорт: export default index");
import myval from './js/02-test';
console.log(myval.mult(5,4)); // 20
console.log(myval.div(100,4)); // 25