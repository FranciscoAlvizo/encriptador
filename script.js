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





}

function ColocarTextoEnCuadro() {


}