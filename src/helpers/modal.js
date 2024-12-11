
import * as basicLightbox from 'basiclightbox';
import "basiclightbox/dist/basicLightbox.min.css";


// function createModal(product) {
//     const instance = basicLightbox.create(`
//         <div class="modal-hw8">
//             <img src="${product.img}" alt="${product.name}" width="240">
//             <h2>${product.name}</h2>
//             <h3>${product.price} грн</h3>
//             <p>${product.description}</p>
//             <div>
//             <button class="js-favorite" type="button">Add to favorite</button>
//             <button class="js-basket" type="button">Add to basket</button>
//             </div>
//         </div>
//       `);
//       instance.show();
// }

function createModal(product) {
    const instance = basicLightbox.create(`
        <div class="modal-hw8">
            <img src="${product.img}" alt="${product.name}" width="240">
            <h2>${product.name}</h2>
            <h3>${product.price} грн</h3>
            <p>${product.description}</p>
            <div>
            <button class="js-favorite" type="button">Add to favorite</button>
            <button class="js-basket" type="button">Add to basket</button>
            </div>
        </div>
      `, { 
            handler: null,
            onShow(instance) { 
                this.handler = closeModal.bind(instance);
                document.addEventListener("keydown", this.handler);
            },
            onClose() {
                document.removeEventListener("keydown", this.handler);
            },
    });
    instance.show();
}


function closeModal (event) {
    if(event.code === "Escape") {
        this.close();
    }
}



export {createModal};