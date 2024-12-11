

function createMarkup (arr, list) {
    let markup;
    if(arr.length) {
        markup = arr.map(({ id, img, name })=> `
            <li data-id="${id}" class="js-card">
            <h2>${name}</h2>
            <img src="${img}" alt="${name}" width="120">
            <p><a href="#" class="js-info">More information</a></p>
            <div>
                <button class="js-favorite" type="button">Add to favorite</button>
                <button class="js-basket" type="button">Add to basket</button>
            </div>
            </li>
        `).join("");
    }
    else {
        markup = `
        <li>
            <h2>Відсутні обрані товари</h2>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlR_OQ2c1UXJm7CZ0Tw661abzXO6rczl4tVw&s" alt="product" width="320">
        </li>
        `;
    }

    list.innerHTML = markup;
}

export {createMarkup};