function init(){
    renderMenuList(burgerList, "burgerMenu", "burger");
    renderMenuList(pizzaList, "pizzaMenu", "pizza");
    renderBasket();
}


function renderMenuList(menuList, id, category){
    let menuListRef = document.getElementById(id);
    menuListRef.innerHTML = "";

    for (let i = 0; i < menuList.length; i++) {
        menuListRef.innerHTML += getHTMLMenuList(menuList[i], category, i);  
    }  
}


function renderBasket(i){
    let basketContentRef = document.getElementById('basketContent');
    basketContentRef.innerHTML = "";
    renderCategoryBasket(burgerList, "burger", basketContentRef);
    renderCategoryBasket(pizzaList, "pizza", basketContentRef);

    if(basketContentRef.innerHTML === ""){
        basketContentRef.innerHTML = getHTMLEpmtyBasket();
    }
}


function renderCategoryBasket(menuList, category, itembox){
    for (let i = 0; i < menuList.length; i++) {
        if(menuList[i].amount > 0){
            itembox.innerHTML += getHTMLBasketItem(menuList[i], category, i);
}
    }
}



function addToBasket(category, i){
    let list;
    if(category === "burger"){
        list = burgerList
    }else{
        list = pizzaList
    }
    list[i].amount++;
    renderBasket();
}

function deleteAmount(category, i){
    let list;
    if(category === "burger"){
        list = burgerList
    }else{
        list = pizzaList
    }
    list[i].amount--;
    renderBasket();
}