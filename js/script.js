$(document).ready(()=>{
    $("#formPuntoUno").submit((ev) => {
        ev.preventDefault();
        texto = $("#textoIngresado").val();
        $("#respuestaUno").html("Cantidad de Caracteres: "+texto.length);
    });

    $("#formPuntoDos").submit((ev) => {
        ev.preventDefault();
        valor = $("#valorIngresado").val();
        $("#respuestaDos").html("Tipo de Valor Ingresado: "+typeof(valor));
    });
});