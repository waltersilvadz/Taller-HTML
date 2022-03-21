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
});