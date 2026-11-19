function init(){
    renderMenuList(burgerList, "burgerMenu");
    renderMenuList(pizzaList, "pizzaMenu");
    renderBasket();
}


function renderMenuList(menuList, id){
    let menuListRef = document.getElementById(id);
    menuListRef.innerHTML = "";

    for (let i = 0; i < menuList.length; i++) {
        menuListRef.innerHTML += getHTMLMenuList(menuList[i]);  
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