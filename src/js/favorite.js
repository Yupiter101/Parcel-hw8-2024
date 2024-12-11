
import { common } from './comon';
import { createMarkup } from '../helpers/markup';
import { createModal } from '../helpers/modal';
import { instruments } from '../helpers/instruments';

const list = document.querySelector(".js-list");
const favorite = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];

createMarkup(favorite, list);

list.addEventListener("click", onClick);

function onClick(event) {
    event.preventDefault();
    if(event.target.classList.contains("js-info")) {
        const product = findProduct(event.target);
        createModal(product);
    }
}



function findProduct (elem) {
    const prodId = Number(elem.closest(".js-card").dataset.id);
    return instruments.find(({ id }) => id === prodId); 
}
