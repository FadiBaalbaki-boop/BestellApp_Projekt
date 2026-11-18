function getHTMLBurgerList(i){
    return `
        
    <article class="menu-card">
        <img class="burger-menu-pic" src="${burgerList[i].img}">
        <div class="menu-card-info">
            <div>
            <h3>${burgerList[i].name}</h3>
            <p>${burgerList[i].price.toFixed(2)}€</p>
            </div>
            <p>${burgerList[i].ingredients}</p>
            <button>Add to basket</button>
        </div>
    </article>`
}