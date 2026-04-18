const VENTAS_BASE = 5;

function calcularComision(numeroVentas, precioProducto) {
    let comision = 0;

    if (numeroVentas > VENTAS_BASE) {
        let ventasExtras = numeroVentas - VENTAS_BASE;
        comision = ventasExtras * (precioProducto * 0.10);
    }
    return comision;
}

    function validarInput(input) {
  const valor = input.value.trim();
  const errorDiv = document.getElementById("error_" + input.id);

  // Reset
  errorDiv.textContent = "";

  if (valor === "") {
    errorDiv.textContent = "Este campo no puede estar vacío";
    return;
  }

  if (!/^\d+$/.test(valor)) {
    errorDiv.textContent = "Solo se permiten números";
    return;
  }

  if (valor.length > 5) {
    errorDiv.textContent = "Máximo 5 dígitos permitidos";
    return;
  }
}

function calcular(){

    let sueldoBase=recuperarFloat("txtSueldoBase");
    let ventas=recuperarFloat("txtVentas");
    let precio=recuperarFloat("txtPrecio");

    let comision=calcularComision(ventas,precio);
    
    let total=sueldoBase+comision;

    let spSueldoBase=document.getElementById("spSueldoBase");
    let spComision=document.getElementById("spComision");
    let spTotal=document.getElementById("spTotal");

    spSueldoBase.textContent=sueldoBase.toFixed(2);;
    spComision.textContent=comision.toFixed(2);;
    spTotal.textContent=total.toFixed(2);;

}


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