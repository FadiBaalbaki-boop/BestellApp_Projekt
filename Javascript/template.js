function getHTMLBurgerList(i){
    return `
        
    <article class="menu-card">
        <img class="burger-menu-pic" src="${burgerList[i].img}">
        <div class="menu-card-info">
            <div class="menu-name-price">
            <h3>${burgerList[i].name}</h3>
            <p class="menu-price">${burgerList[i].price.toFixed(2)}€</p>
            </div>
            <p class="menu-ingredients">${burgerList[i].ingredients}</p>
            <div class="button">
            <button class="menu-button">Add to basket</button>
            </div>
            </div>
       
    </article>`
}