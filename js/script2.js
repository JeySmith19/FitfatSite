
const header=document.querySelector("header");
header.innerHTML=`
<div class="dropdown">
    <div class="hamburguesa">☰</div>
    <div class="dropdown-content">
        <a href="index.html">INICIO</a>
        <a href="nosotros.html">NOSOTROS</a>
        <a href="ingresa.html">INGRESA</a>
        <a href="beneficios.html">BENEFICIOS</a>
        <a href="precios.html">PRECIOS</a>
        <a href="comunidad.html">COMUNIDAD</a>
        <a href="app.html">APP</a>
    </div>
</div>
<a href="index.html">
    <img src="img/Logocompleto.png" class="logo-completo" alt="Logo de Fitfat">
    <a href="ingresa.html" class="ingresa-btn">Ingresar</a>
</div>


`;

document.addEventListener("DOMContentLoaded", function () {
    const hamburguesa = document.querySelector(".hamburguesa");
    const dropdownContent = document.querySelector(".dropdown-content");

    hamburguesa.addEventListener("click", function () {
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
});





// Crear el elemento footer
var footer = document.createElement('footer');
footer.style.backgroundColor = 'rgba(136, 61, 138, 255)';
footer.style.color = 'white';
footer.style.padding = '20px';
footer.style.textAlign = 'center';

// Agregar el texto al footer
var p = document.createElement('p');
p.textContent = '¿Te gustó? Póngase en contacto para registrarse e iniciar una consulta';
p.style.fontFamily = 'Abel';
p.style.color = '#000000';
p.style.fontSize = window.innerWidth <= 800 ? '20px' : '30px'; // Cambia el tamaño de la fuente dependiendo del ancho de la ventana
p.style.marginBottom = '-20px';
p.style.textAlign = 'center'; // Centra el texto horizontalmente
footer.appendChild(p);

// Crear una lista no ordenada (ul) para los iconos y textos
var ul = document.createElement('ul');
ul.style.listStyle = 'none'; // Quitar las viñetas de la lista
ul.style.display = 'flex'; // Aplicar flexbox
ul.style.flexDirection = 'column'; // Alinear los elementos en columna
ul.style.alignItems = 'center'; // Centrar horizontalmente
footer.appendChild(ul);

// Función para crear un elemento de lista con icono y texto
function crearListaIconoTexto(href, imgSrc, alt, texto, marginDerechoIcono, marginDerechoTexto) {
    var li = document.createElement('li');

    var a = document.createElement('a');
    a.href = href;
    a.style.display = 'flex';
    a.style.alignItems = 'center';
    a.style.textDecoration = 'none'; // Elimina el subrayado azul de los enlaces
    a.style.color = 'white'; // Cambia el color de los enlaces
    a.style.marginBottom = '35px'; // Añade margen inferior para separar los enlaces
    li.appendChild(a);

    var img = document.createElement('img');
    img.src = imgSrc;
    img.alt = alt;
    img.style.marginRight = marginDerechoIcono;
    img.style.width = window.innerWidth <= 800 ? '20px' : '30px'; // Cambia el tamaño de la imagen dependiendo del ancho de la ventana
    a.appendChild(img);

    var span = document.createElement('span');
    span.textContent = texto;
    span.style.color = 'white';
    span.style.marginRight = marginDerechoTexto;
    span.style.fontFamily = 'Abel'; // Cambia el tipo de letra a Abel
    span.style.fontSize = window.innerWidth <= 800 ? '15px' : '22px'; // Cambia el tamaño de fuente a 25px
    a.appendChild(span);

    return li;
}

// Escuchar el evento resize del objeto window
window.addEventListener('resize', function() {
    // Actualizar el tamaño de la fuente y de la imagen cuando el tamaño de la ventana cambia
    p.style.fontSize = window.innerWidth <= 800 ? '20px' : '30px';
    img.style.width = window.innerWidth <= 800 ? '20px' : '30px';
    span.style.fontSize = window.innerWidth <= 800 ? '15px' : '22px';
});


        // Agregar el texto de los servicios online
        var p2 = document.createElement('p');
        p2.textContent = 'Servicios online en todas nuestras redes asociadas';
        p2.style.fontFamily = 'Abel';
        p2.style.color = '#808080';
        p2.style.fontSize = '20.2px';
        p2.style.marginBottom = '=10px'; // Ajusta el valor del margen inferior
        footer.appendChild(p2);
        // Ajustar el margen inferior para el elemento "¿Te gustó?"
        p.style.marginBottom = '20px'; // Ajusta el valor del margen inferior solo para este elemento

        // Crear una lista no ordenada (ul) para los iconos y textos
        var ul = document.createElement('ul');
        ul.style.listStyle = 'none'; // Quitar las viñetas de la lista
        ul.style.display = 'flex'; // Aplicar flexbox
        ul.style.flexDirection = 'column'; // Alinear los elementos en columna
        ul.style.alignItems = 'center'; // Centrar horizontalmente
        footer.appendChild(ul);

        // Función para crear un elemento de lista con icono y texto
        function crearListaIconoTexto(href, imgSrc, alt, texto, marginDerechoIcono, marginDerechoTexto) {
            var li = document.createElement('li');
        
            var a = document.createElement('a');
            a.href = href;
            a.style.display = 'flex';
            a.style.alignItems = 'center';
            a.style.textDecoration = 'none'; // Elimina el subrayado azul de los enlaces
            a.style.color = 'white'; // Cambia el color de los enlaces
            a.style.marginBottom = '-5px'; // Añade margen inferior para separar los enlaces
            li.appendChild(a);
        
            var img = document.createElement('img');
            img.src = imgSrc;
            img.alt = alt;
            img.style.marginRight = marginDerechoIcono;
            a.appendChild(img);
        
            var span = document.createElement('span');
            span.textContent = texto;
            span.style.color = 'white';
            span.style.marginRight = marginDerechoTexto;
            span.style.fontFamily = 'Abel'; // Cambia el tipo de letra a Abel
            span.style.fontSize = '22px'; // Cambia el tamaño de fuente a 25px
            a.appendChild(span);
        
            return li;
        }
        
        // Agregar los elementos de lista al footer
        ul.appendChild(crearListaIconoTexto('https://www.instagram.com/fab14y', 'img/ig.jpg', 'Instagram', '@fitfat', '10px', '5px'));
        ul.appendChild(crearListaIconoTexto('mailto:fabriciopradoyt5@gmail.com', 'img/email.jpg', 'Email', 'fitfat@gmail.com', '10px', '-85px'));
        ul.appendChild(crearListaIconoTexto('tel:994355129', 'img/tel.jpg', 'Teléfono', '994355129', '10px', '-38px'));

        // Agregar el footer al final del body
        document.body.appendChild(footer);




		/*TESTIMONIOS */
		var testimonials = document.querySelectorAll('.testimonial');
		var currentIndex = 0;
		
		function showTestimonial(index) {
			for (var i = 0; i < testimonials.length; i++) {
				testimonials[i].classList.remove('active');
			}
			testimonials[index].classList.add('active');
		}
		
		document.querySelector('.arrow.left').addEventListener('click', function() {
			currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 1;
			showTestimonial(currentIndex);
		});
		
		document.querySelector('.arrow.right').addEventListener('click', function() {
			currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
			showTestimonial(currentIndex);
		});
		
		showTestimonial(currentIndex); /* Muestra el primer testimonio al cargar la página */
		
		/* Añade un intervalo para cambiar el testimonio automáticamente cada 10 segundos */
		setInterval(function() {
			currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
			showTestimonial(currentIndex);
		}, 10000); /* 10000 milisegundos son 10 segundos */



/*Menu Guia */

guia.addEventListener("click", (g) =>{
    g.preventDefault();
    const sectionG =document.querySelector(".guia");
    sectionG.scrollIntoView({behavior: "smooth"});
})

/*Menu Funcioens */

funciones.addEventListener("click", (f) =>{
    f.preventDefault();
    const sectionF =document.querySelector(".funciones");
    sectionF.scrollIntoView({behavior: "smooth"});
})





