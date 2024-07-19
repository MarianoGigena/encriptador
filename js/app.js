document.addEventListener('DOMContentLoaded', () => {
    const boton1 = document.getElementById('boton1');
    const boton2 = document.getElementById('boton2');
    const boton3 = document.getElementById('boton3');

    const resultado1 = document.getElementById('resultado1');
    const resultado2 = document.getElementById('resultado2');
    const resultado3 = document.getElementById('resultado3');

    boton1.addEventListener('click', () => {
        var textarea = document.getElementById("texto-a-transformar").value;
        console.log(textarea)
        var textoEncriptado = textarea
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        document.getElementById("texto-a-transformar").textContent = textoEncriptado;
        console.log(textoEncriptado);


        var elemento = document.getElementById('conversor-inicio');
        if (elemento) {
            elemento.remove(); // Elimina el div con id "miElemento"
        }
        document.getElementById("texto-convertido2").textContent = textoEncriptado
        var elemento2 = document.getElementById('texto-convertido2');
        elemento2.classList.add('texto-convertido-estilo'); // Agrega la clase


        // Crear el botón
        const boton3 = document.createElement('button');
        boton3.textContent = 'Copiar'; // Texto del botón

        // Opcional: Configurar atributos del botón
        boton3.id = 'boton3';
        boton3.className = 'botonCopiar'; // Si quieres usar CSS para estilos

        // Agregar un evento al botón
        boton3.addEventListener('click', () => {
            // Selecciona el área de texto
            var textarea = document.getElementById("texto-convertido2");
            textarea.select();
            textarea.setSelectionRange(0, 99999); // Para dispositivos móviles

            // Copia el texto seleccionado
            document.execCommand("copy");

            // Opcional: Mostrar un mensaje de confirmación
            alert("Texto copiado: " + textarea.value);
        });

        // Seleccionar el contenedor y agregar el botón
        const contenedor = document.getElementById('boton-copiar');
        contenedor.appendChild(boton3);

        //limpiar
        var textarea = document.getElementById('texto-a-transformar');
        textarea.value = textarea.getAttribute('placeholder'); // Limpia el valor del textarea

    });

    boton2.addEventListener('click', () => {
        var textarea = document.getElementById("texto-a-transformar").value;
        console.log(textarea)
        var textoEncriptado = textarea
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        document.getElementById("texto-a-transformar").textContent = textoEncriptado;
        console.log(textoEncriptado);

        var elemento = document.getElementById('conversor-inicio');

        if (elemento) {
            elemento.remove(); // Elimina el div con id "miElemento"
        }
        document.getElementById("texto-convertido2").textContent = textoEncriptado
        var elemento2 = document.getElementById('texto-convertido2');
        elemento2.classList.add('texto-convertido-estilo'); // Agrega la clase


        // Crear el botón
        const boton3 = document.createElement('button');
        boton3.textContent = 'Copiar'; // Texto del botón

        // Opcional: Configurar atributos del botón
        boton3.id = 'boton3';
        boton3.className = 'botonCopiar'; // Si quieres usar CSS para estilos



        // Agregar un evento al botón
        boton3.addEventListener('click', () => {
            // Selecciona el área de texto
            var textarea = document.getElementById("texto-convertido2");
            textarea.select();
            textarea.setSelectionRange(0, 99999); // Para dispositivos móviles

            // Copia el texto seleccionado
            document.execCommand("copy");

            // Opcional: Mostrar un mensaje de confirmación
            alert("Texto copiado: " + textarea.value);
        });

        // Seleccionar el contenedor y agregar el botón
        const contenedor = document.getElementById('boton-copiar');
        contenedor.appendChild(boton3);

        //limpiar
        textarea = document.getElementById('texto-a-transformar');
        textarea.value = textarea.getAttribute('placeholder'); // Limpia el valor del textarea
    }
    );

});


