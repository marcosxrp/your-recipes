const burguer = document.getElementById("burguer-icon");
const navItens = document.getElementById("navItens");
const burguerFont = document.getElementById("burguerFont");

let openMenu = false;

burguer.addEventListener('click', () => {
    if (!openMenu) {
        navItens.style.width = "100vw"
        navItens.style.display = "flex";
        navItens.style.flexDirection = "column";
        burguerFont.className = "bx bx-x";
    } else {
        navItens.style.width = "none"
        navItens.style.display = "none";
        burguerFont.className = "bx bx-menu";
    }

    openMenu = !openMenu;
});

// errors witgh resize
window.addEventListener('resize', () => {
    if (window.innerWidth >= 480) {
        navItens.style.width = "none"
        navItens.style.display = 'flex';
        navItens.style.flexDirection = 'row';
    }
    else if(window.innerWidth <= 480 && openMenu == true){
        navItens.style.flexDirection = 'column';
    }
    else{
        navItens.style.display = 'none';
    }
});