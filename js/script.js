$(document).ready(()=>{
    $("#formPuntoUno").submit((ev) => {
        ev.preventDefault();
        texto = $("#textoIngresado").val();
        $("#respuestaUno").html("Cantidad de Caracteres: "+texto.length);
    });
});