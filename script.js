//Funcion para capturar texto

function capturar() {

    //Obtener el elemto del texto
    var textarea = document.getElementById("miTexto");
    var texto = textarea.value;
    var textoCorrecto = texto.toLowerCase();
    //console.log(texto);
    //console.log(textoCorrecto);
    var palabras = textoCorrecto.split("");


    var letrasNuevas = palabras.map(function (letra) {

        if (letra == "a") {

            return "ai";
        }
        else if (letra == "e") {
            return "enter"
        }
        else if (letra == "i") {
            return "imes"
        }
        else if (letra == "o") {
            return "ober"
        }
        else if (letra == "u") {
            return "ufat"
        }

        else {
            return letra;
        }

    });

    var textoFinal = letrasNuevas.join("");
    document.getElementById("textofinal").innerHTML = textoFinal;

    const doc = document.getElementById("contenido");
    doc.removeChild(doc.firstElementChild);


    const boton = document.getElementById("miBoton");
    boton.style.display = "block";


}
//Funcion para desencriptar


function Desencriptar() {
    //Obtener el elemto del texto
    var textarea = document.getElementById("miTexto");
    var texto = textarea.value;
    var textoCorrecto = texto.toLowerCase();
    //console.log(texto);
    //console.log(textoCorrecto);

    var textoFinal = textoCorrecto.replace(/ai/g, 'a');
    textoFinal = textoFinal.replace(/enter/g, 'e');
    textoFinal = textoFinal.replace(/imes/g, 'i');
    textoFinal = textoFinal.replace(/ober/g, 'o');
    textoFinal = textoFinal.replace(/ufat/g, 'u');

    document.getElementById("textofinal").innerHTML = textoFinal;

    const doc = document.getElementById("contenido");
    doc.removeChild(doc.firstElementChild);


    const boton = document.getElementById("miBoton");
    boton.style.display = "block";





}

function copiarTextoAlPortapapeles() {
    // Obtener el contenido del párrafo
    const parrafo = document.getElementById("textofinal");
    const texto = parrafo.innerText;

    // Crear un elemento de texto temporal para copiar al portapapeles
    const textoTemporal = document.createElement("textarea");
    textoTemporal.value = texto;
    document.body.appendChild(textoTemporal);

    // Seleccionar el texto temporal y copiarlo
    textoTemporal.select();
    document.execCommand("copy");

    // Eliminar el elemento de texto temporal
    document.body.removeChild(textoTemporal);

    // Mostrar una notificación o feedback al usuario (opcional)
    alert("Texto copiado al portapapeles: " + texto);
}