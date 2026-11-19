function getHTMLMenuList(item){
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
            <button class="menu-button">Add to basket</button>
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