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



// Проект локалстореж з Рисічем

const instruments = [
    {
        id: 1,
        img: "URL-1",
        name: "Шуруповерт",
        price: 1500,
        description: "Lorem, ipsum dolor Vero, quas?"
    },
    {
        id: 2,
        img: "URL-2",
        name: "Перфоратор",
        price: 3948,
        description: "Lorem,  dolor Vero, quas?"
    },
    {
        id: 3,
        img: "URL-3",
        name: "Шліфмашина",
        price: 1299,
        description: "Lorem, ipsum dolor dolor dolor Vero, quas?"
    },
    {
        id: 4,
        img: "URL-4",
        name: "Пилка",
        price: 3000,
        description: "Lorem,  dolor Vero, q"
    },
];

const search = document.querySelector(".js-search");


function createMarkup (arr) {
    const markup = arr.map(({})=> {});
}