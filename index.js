const btnMenu = document.getElementById('btn--menu');
const navegacion = document.getElementById('navegacion');

btnMenu.addEventListener('click', ()=> {
    console.log(btnMenu.src.split('/')[4]);
    if(btnMenu.src.split('/')[4]==='abrir-menu.svg'){
        btnMenu.src = './assets/cerrar-menu.svg';
    }else{
        btnMenu.src = './assets/abrir-menu.svg';
    }
    navegacion.classList.toggle('navegacion--dinamico');
});