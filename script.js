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


function renderBasket(){
    let basketContentRef = document.getElementById('basketContent');
    let basketSummaryRef = document.getElementById('basketSummary');
    basketContentRef.innerHTML = "";
    renderCategoryBasket(burgerList, "burger", basketContentRef);
    renderCategoryBasket(pizzaList, "pizza", basketContentRef);
    if(basketContentRef.innerHTML === ""){
        basketContentRef.innerHTML = getHTMLEpmtyBasket();
        basketSummaryRef.innerHTML = "";
    }else{
        let subTotal = calculateSubTotal();
        let deliveryFree = 4.99;
        let total = subTotal + deliveryFree;
        basketSummaryRef.innerHTML = getHTMLBasketSummary(subTotal, deliveryFree, total);
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


function calculateSubTotal(){
    let menuList = burgerList.concat(pizzaList);
    let sum = 0;

    for (let i = 0; i < menuList.length; i++) {
        sum += menuList[i].price * menuList[i].amount;  
    }
    return sum;
}


function orderNow(){
    let basketWrapperRef = document.getElementById('basketWrapper');
    let orderOverlayRef = document.getElementById('orderOverlay');
    orderOverlayRef.innerHTML = getHTMLorderOverlay();
    orderOverlayRef.show();
    basketWrapperRef.classList.remove('mobile-basket-open');
    let menuList = burgerList.concat(pizzaList);
    for (let i = 0; i < menuList.length; i++) {
        menuList[i].amount = 0;   
    }
    renderBasket();
}


function closeOverlay(){
    let orderOverlayRef = document.getElementById('orderOverlay');
    orderOverlayRef.close(); 
}


function mobileBasket(){
    let orderOverlayRef = document.getElementById('orderOverlay');
    let basketWrapperRef = document.getElementById('basketWrapper');
    
    if(orderOverlayRef.open){
        closeOverlay();
    }else{
        basketWrapperRef.classList.toggle('mobile-basket-open');
    }
}


function mobileClose(){
    document.getElementById('basketWrapper').classList.remove('mobile-basket-open');
}


