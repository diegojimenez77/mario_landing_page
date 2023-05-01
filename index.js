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

//seleccion
const imagenes = document.querySelectorAll('.personaje--seleccionar');
const imagenActual = document.getElementById('imagen--actual');

imagenes.forEach(selector=>{
    selector.addEventListener('click', ()=>{
        imagenActual.src = selector.src.replace('png','webp');
    });
});