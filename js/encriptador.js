//tomamos los datos del text area


function encriptando() {
    const textarea = document.getElementById("texto-a-trasformar").value;
    console.log(textarea)
    var textoEncriptado = textarea
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("texto-a-trasformar").textContent = textoEncriptado;
    console.log(textoEncriptado);

    var elemento = document.getElementById('conversor-inicio');
    elemento.remove(); // Elimina el div con id "miElemento"

    document.getElementById("texto-convertido2").textContent = textoEncriptado
    var elemento2 = document.getElementById('texto-convertido2');
    elemento2.classList.add('texto-convertido-estilo'); // Agrega la clase


    // Crear el botón
    const boton = document.createElement('button');
    boton.textContent = 'Copiar'; // Texto del botón

    // Opcional: Configurar atributos del botón
    boton.id = 'miBoton';
    boton.className = 'botonCopiar'; // Si quieres usar CSS para estilos

    // Agregar un evento al botón
    boton.addEventListener('click', () => {
        alert('¡Botón clickeado!');
    });

    // Seleccionar el contenedor y agregar el botón
    const contenedor = document.getElementById('boton-copiar');
    contenedor.appendChild(boton);


}