const VENTAS_BASE = 5;

function calcularComision(numeroVentas, precioProducto) {
    let comision = 0;

    if (numeroVentas > VENTAS_BASE) {
        let ventasExtras = numeroVentas - VENTAS_BASE;
        comision = ventasExtras * (precioProducto * 0.10);
    }
    return comision;
}

function calcular(){
    //recuperamos propiedades de las cajas de texto
    //let cmpSueldoBase=document.getElementById("txtSueldoBase");
    //let cmpVentas=document.getElementById("txtVentas");
    //let cmpPrecio=document.getElementById("txtPrecio");

    //recuperamos el valor de las cajas de texto
    //let sueldoBaseStr=cmpSueldoBase.value;

    //let sueldoBaseStr=recuperarTexto("txtSueldoBase");
    //let numeroVentasStr=recuperarTexto("txtVentas");
    //let precioProductoStr=recuperarTexto("txtPrecio");

    //let ventasStr=cmpVentas.value;
    //let precioStr=cmpPrecio.value;

    //convertimos el texto a numero
    let sueldoBase=recuperarFloat("txtSueldoBase");
    let ventas=recuperarFloat("txtVentas");
    let precio=recuperarFloat("txtPrecio");

    let comision=calcularComision(ventas,precio);
    
    let total=sueldoBase+comision;

    let spSueldoBase=document.getElementById("spSueldoBase");
    let spComision=document.getElementById("spComision");
    let spTotal=document.getElementById("spTotal");

    spSueldoBase.textContent=sueldoBase;
    spComision.textContent=comision;
    spTotal.textContent=total;

}