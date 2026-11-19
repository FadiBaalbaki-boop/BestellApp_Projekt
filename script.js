function init(){
    renderBurgerList();
    renderBasket();
}


function renderBurgerList(){
    let burgerMenuRef = document.getElementById('burgerMenu');
    burgerMenuRef.innerHTML = "";

    for (let i = 0; i < burgerList.length; i++) {
        burgerMenuRef.innerHTML += getHTMLBurgerList(i);  
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