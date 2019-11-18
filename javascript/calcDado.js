function rodaDado(x)
{
    var divDado = document.getElementById("resultado");

    var numeroDado = Math.floor((Math.random() * x) + 1);
    
    divDado.innerHTML = numeroDado;
}