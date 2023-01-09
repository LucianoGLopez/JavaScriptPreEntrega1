function solicitarUsuarioYEdad () {
    let usuario = prompt("Ingrese su nombre:");
    let edad = parseInt(prompt("Ingrese su edad:"));

    if (edad >= 18) {
        alert("Bienvenido/a " + usuario);
    } 
    while (edad < 18) {
        alert("Acceso denegado. Usted es menor de edad")
        usuario = prompt("Ingrese su nombre:");
        edad = parseInt(prompt("Ingrese su edad:"));
    }
    
}

function calcularPrecioFinalEnCuotas () {
    while (resultadoPrecioFinal !== "NO" && resultadoPrecioFinal !== "No" && resultadoPrecioFinal !== "no" ) {

        const montoDelProducto = parseFloat(prompt("Por favor ingrese el monto del producto seleccionado:"));
        let cuotas = prompt("Ingrese el número de cuotas (3, 6, 12 cuotas)");
    
        while (cuotas !== "3" && cuotas !== "6" && cuotas !== "12") {
            cuotas = prompt("Ingrese correctamente el número de cuotas (3, 6, 12 cuotas)");
        }
    
        switch (cuotas) {
            case "3":
                subtotal = montoDelProducto * 15 / 100;
                resultadoPrecioFinal = subtotal + montoDelProducto;
                break
    
            case "6":
                subtotal = montoDelProducto * 30 / 100;
                resultadoPrecioFinal = subtotal + montoDelProducto;
                break
    
            case "12":
                subtotal = montoDelProducto * 45 / 100;
                resultadoPrecioFinal = subtotal + montoDelProducto;
                break
        }
    
        alert("El precio final del producto en " + cuotas + " cuotas es de: $" + resultadoPrecioFinal);
    
        resultadoPrecioFinal = prompt("Desea agregar otro producto (SI / NO)");
    }
}

let usuario = "";
let edad = "";
let resultadoPrecioFinal = "";
let subtotal = "";

solicitarUsuarioYEdad ();
calcularPrecioFinalEnCuotas ()








