function getHTMLMenuList(item, category, i){
    return `
        
    <article class="menu-card">
        <img class="menu-pic" src="${item.img}">
        <div class="menu-card-info">
            <div class="menu-name-price">
            <h3>${item.name}</h3>
            <p class="menu-price">${item.price.toFixed(2)}€</p>
            </div>
            <p class="menu-ingredients">${item.ingredients}</p>
            <div class="button">
            <p class="menu-price-mobile">${item.price.toFixed(2)}€</p>
            <button onclick="addToBasket('${category}', ${i})" class="menu-button">Add to basket</button>
            </div>
            </div>
       
    </article>`
}

function getHTMLEpmtyBasket(i){
    return `
    <div class="text-info">
    <p>Nothing here yet.<br>
    Go ahead and choose something<br>
    delicous</p>
    <img src="./assets/img/basket.png">`
}

function getHTMLBasketItem(item, category, i){
    let totalItemPrice = (item.price * item.amount).toFixed(2);
    let minusOrTrash = item.amount === 1 ? '<img src="./assets/icons/delete.png">' : '-';

    return `
    <div class="basket-item">
    <div class="basket-item-header">
    <span>${item.amount} * ${item.name}</span>
    </div>
    <div class="basket-item-controls">
    <div class="quantity-box">
    <button class="trash-btn" onclick="deleteAmount('${category}', ${i})">${minusOrTrash}</button>
    <span>${item.amount}</span>
    <button class="trash-btn" onclick="addToBasket('${category}', ${i})">+</button
    </div>
    <span>${totalItemPrice}€</span>
    </div>
    </div>`
}

function getHTMLBasketSummary(subTotal, deliveryFree, total){
    return`
    <div class="basket-summary-line">
    <span>Subtotal</span>
    <span>${subTotal.toFixed(2)}€</span>
    </div>
    <div class="basket-summary-line">
    <span>Delivery free</span>
    <span>${deliveryFree.toFixed(2)}€</span>
    </div>
    <hr class="basket-line">
    <div class="basket-summary-line basket-total">
    <span>Total</span>
    <span>${total.toFixed(2)}€</span>
    </div>
    <button onclick="orderNow()" class="order-now-btn">
    Buy now (${total.toFixed(2)}€)
    </button>`;
}