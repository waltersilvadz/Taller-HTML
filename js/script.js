$(document).ready(()=>{
    $("#formPuntoUno").submit((ev) => {
        ev.preventDefault();
        texto = $("#textoIngresado").val();
        $("#respuestaUno").html("Cantidad de Caracteres: "+texto.length);
    });

    $("#formPuntoDos").submit((ev) => {
        ev.preventDefault();
        valor = $("#valorIngresado").val();
        numero = parseInt(valor);
        if (isNaN(numero)) {
            $("#respuestaDos").html("Tipo de Valor Ingresado: Texto");
        } else {
            $("#respuestaDos").html("Tipo de Valor Ingresado: Número");
        }
        if (valor.length == 0) {
            $("#respuestaDos").html("Tipo de Valor Ingresado: No hay ningún Valor");
        }
    });

    $("#formPuntoTres").submit((ev) => {
        ev.preventDefault();
        nombre = $("#nombreIngresado").val();
        edad = parseInt($("#edadIngresada").val());
        if (isNaN(edad) || nombre.length == 0) {
            $("#respuestaTres").html("El nombre o la Edad Ingresada no son correctos");
        } else if (edad >= 18) {
            $("#respuestaTres").html("Hola "+nombre+", eres mayor de edad.");
        } else {
            $("#respuestaTres").html("Hola "+nombre+", eres menor de edad.");
        }
    });
});