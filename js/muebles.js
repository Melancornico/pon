let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container');
let containerMenu = document.querySelector('.menu');
let activador = true;
let ubiPrincipal = 0;

/*Menú de navegación */
const btnCategorias = document.getElementById('btn-categorias');
const btnCerrarMenu = document.getElementById('btn-menu-cerrar');
const grid = document.getElementById('grid');
const contenedorSub = document.querySelector('#grid .contenedor-subcategorias');
const contenedorEnlacesNav = document.querySelector('#menu .contenedor-enlaces-nav');
const esdm = () => {
    if(window.innerWidth <= 800){
        return true;
    }else{
        return false;
    }
}

btnCategorias.addEventListener('mouseover', () =>{
    if(!esdm()){
        grid.classList.add('activo');
    }
});

grid.addEventListener('mouseleave', () =>{
    if(!esdm()){
        grid.classList.remove('activo');
    }
});

document.querySelectorAll('#menu .categorias a').forEach((elemento) =>{
    elemento.addEventListener('mouseenter', (e) =>{
            document.querySelectorAll('#menu .subcategoria').forEach((categoria) =>{
                categoria.classList.remove('activo');
                if(categoria.dataset.categoria == e.target.dataset.categoria)
                categoria.classList.add('activo');
            });
        
    });
});



//Evento Dispositivo Móvil
document.querySelector('#btn-menu-barras').addEventListener('click', (e) =>{
    e.preventDefault();
    if(contenedorEnlacesNav.classList.contains('activo')){
        contenedorEnlacesNav.classList.remove('activo');
        document.querySelector('body').style.overflow = 'visible';
    }
    else{
        contenedorEnlacesNav.classList.add('activo');
        document.querySelector('body').style.overflow = 'hidden';
    }
})

// Mostrar las categorias en responsive
btnCategorias.addEventListener('click', (e) =>{
    e.preventDefault();
    grid.classList.add('activo');
    btnCerrarMenu.classList.add('activo');
});

// Boton de regresar en el menu de categorias
document.querySelector('#grid .categorias .btn-regresar').addEventListener('click', (e) =>{
    e.preventDefault();
    grid.classList.remove('activo');
    btnCerrarMenu.classList.remove('activo');
});

document.querySelectorAll('#menu .categorias a').forEach((elemento)=>{
    elemento.addEventListener('click', (e) => {
        if(esdm()){
            contenedorSub.classList.add('activo');
            document.querySelectorAll('#menu .subcategoria').forEach((categoria) =>{
                categoria.classList.remove('activo');
                if(categoria.dataset.categoria == e.target.dataset.categoria){
                    categoria.classList.add('activo');
                }
            })
        }

    });
});

document.querySelectorAll('#grid .contenedor-subcategorias .btn-regresar').forEach((boton) =>{
    boton.addEventListener('click', (e) =>{
           e.preventDefault();
           contenedorSub.classList.remove('activo');
    })
});

btnCerrarMenu.addEventListener('click', (e) =>{
    document.querySelectorAll('#menu .activo').forEach((e) =>{
        e.classList.remove('activo');
    })
    document.querySelector('body').style.overflow = 'visible';
})


//Slider de Productos
let span = document.getElementsByTagName('span');
	let product = document.getElementsByClassName('product')
	let product_page = Math.ceil(product.length/4);
	let l = 0;
	let movePer = 25.34;
	let maxMove = 60;
    // mobile_view	
	let mob_view = window.matchMedia("(max-width: 900px)");
	if (mob_view.matches)
	 {
	 	movePer = 50.36;
	 	maxMove = 504;
	 }

	let right_mover = ()=>{
		l = l + movePer;
		if (product == 1){l = 0; }
		for(const i of product)
		{
			if (l > maxMove){l = l - movePer;}
			i.style.left = '-' + l + '%';
		}

	}
	let left_mover = ()=>{
		l = l - movePer;
		if (l<=0){l = 0;}
		for(const i of product){
			if (product_page>1){
				i.style.left = '-' + l + '%';
			}
		}
	}
	span[1].onclick = ()=>{right_mover();}
	span[0].onclick = ()=>{left_mover();}



/*Menú aparezca y desaparezca al hacer scroll */
// window.onscroll = function(){
//     let desplazamiento = window.pageYOffset;
//     if(ubiPrincipal == desplazamiento){
//         document.getElementsById('.menu').style.top = '0';
//     }
//     else{
//         document.getElementsById('.menu').style.top = '-60px';
//     }
// }