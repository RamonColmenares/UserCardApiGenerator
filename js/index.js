let boton = document.querySelector("#random");

window.onload = function(){
    consultarApi();
}

boton.addEventListener('click', function(){
    // Aquí realizamos un la consulta de la promesa, esperando su respuesta asíncrona
    consultarApi();
})

function consultarApi(){
    fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        //manipulamos la respuesta
        console.log(data.results[0])
        renderizarDatosUsuario(data.results[0]);
    });
}

function renderizarDatosUsuario(datos) {
    /* -------------------------------- CONSIGNA 1 -------------------------------- */
    // Aquí deben desarrollar una función que muestre en pantalla:
    // la foto, el nombre completo del usuario y su email.
    // Esto debe estar basado en la info que nos llega desde la API e insertarse en el HTML.
    let container = document.querySelector(".tarjeta");
    container.innerHTML = `
    <img src="${datos.picture.large}" alt="imagen usuario">
    <h2>${datos.name.title}. ${datos.name.first} ${datos.name.last}</h2>
    <p>${datos.email}</p>
    <div style="margin: 24px 0px 0px 0px;">
        <a href="#"><i class="fa fa-dribbble"></i></a> 
        <a href="#"><i class="fa fa-twitter"></i></a>  
        <a href="#"><i class="fa fa-linkedin"></i></a>  
        <a href="#"><i class="fa fa-facebook"></i></a> 
    </div>
    `
}


/* --------------------------- CONSIGNA 2 (extra) --------------------------- */
// Aqui pueden ir por el punto extra de utilizar el boton que se encuentra comentado en el HTML
// Pueden descomentar el código del index.html y usar ese boton para ejecutar un nuevo pedido a la API, sin necesidad de recargar la página.
// Es criterio del equipo QUÉ bloque del código debe contenerse dentro de una función para poder ser ejecutada cada vez que se escuche un click.