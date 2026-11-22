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
    let isEmpty = true;
    basketContentRef.innerHTML = "";

    for (let i = 0; i < burgerList.length; i++) {
        if(burgerList[i].amount > 0){
            isEmpty = false;
        }  
    }
    if(isEmpty){
        basketContentRef.innerHTML += getHTMLEpmtyBasket(i);
    }  
}

function addToBasket(category, i){
    let list;
    if(category === "burgerList"){
        list = "burgerList"
    }else{
        list = "pizzaList"
    }

    list[i].amount++;
    renderBasket();
}