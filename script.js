function init(){
    renderBurgerList();
}


function renderBurgerList(){
    let burgerMenuRef = document.getElementById('burgerMenu');
    burgerMenuRef.innerHTML = "";

    for (let i = 0; i < burgerList.length; i++) {
        burgerMenuRef.innerHTML += getHTMLBurgerList(i);
        
    }
}