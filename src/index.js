console.log("My index.js");

import * as basicLightbox from 'basiclightbox';
// import 'src/styles/main';
import "basiclightbox/dist/basicLightbox.min.css";


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
        img: "https://i.pinimg.com/originals/24/15/21/24152197af38deb718eb730992d441d0.webp",
        name: "Шуруповерт",
        price: 1500,
        description: "Lorem, ipsum dolor Vero, quas?"
    },
    {
        id: 2,
        img: "https://bannerplus.ru/files/img/pics/devushka-krasivye-kartinki/devushka-krasivye-kartinki-2.webp",
        name: "Перфоратор",
        price: 3948,
        description: "Lorem,  dolor Vero, quas?"
    },
    {
        id: 3,
        img: "https://i.pinimg.com/originals/5b/6e/ca/5b6eca63605bea0eeb48db43f77fa0ce.jpg",
        name: "Шліфмашина",
        price: 1299,
        description: "Lorem, ipsum dolor dolor dolor Vero, quas?"
    },
    {
        id: 4,
        img: "https://s00.yaplakal.com/pics/pics_original/5/0/6/17827605.jpg",
        name: "Пилка",
        price: 3000,
        description: "Lorem,  dolor Vero, q"
    },
];

const search = document.querySelector(".js-search");
const list = document.querySelector(".js-list");
// console.log(list);

function createMarkup (arr) {
    const markup = arr.map(({ id, img, name })=> `
        <li data-id="${id}" class="js-card">
          <h2>${name}</h2>
          <img src="${img}" alt="${name}" width="240">
          <p><a href="#" class="js-info">More information</a></p>
          <div>
            <button type="button">Add to favorit</button>
            <button type="button">Add to basket</button>
          </div>
        </li>
    `).join("");

    // list.insertAdjacentHTML(, markup);
    list.innerHTML = markup;
}


list.addEventListener("click", onClick);

function onClick(event) {
    event.preventDefault();
    if(event.target.classList.contains("js-info")) {
        const { id } = event.target.closest(".js-card").dataset; // Найближчий батько з класом .js-card
        const product = findProduct(Number(id));
        const instance = basicLightbox.create(`
        <h1>Dynamic Content</h1>
        <p>You can set the content</p>
      `);
      instance.show();
    }
}

createMarkup(instruments);

function findProduct (prodId) {
    return instruments.find(({ id }) => id === prodId);
}