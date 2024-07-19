//tomamos los datos del text area
function desencriptando() {
    const textarea = document.getElementById("texto-a-trasformar").value;
    console.log(textarea)
    var textoEncriptado = textarea
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
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