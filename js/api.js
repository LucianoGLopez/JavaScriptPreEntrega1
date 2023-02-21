// API VALOR DOLAR
fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    .then((response) => {
        return response.json();
    })
    .then((jsonResponse) => {
        const contenedor = document.getElementById("contenedor");
        // Dolar oficial
        const nombreDolarOficial = jsonResponse[0].casa.nombre;
        const valorOficialCompra = jsonResponse[0].casa.compra;
        const valorOficialVenta = jsonResponse[0].casa.venta;

        const liNombreDolarOficial = document.createElement("h3");
        liNombreDolarOficial.innerHTML = nombreDolarOficial;
        contenedor.append(liNombreDolarOficial);

        const liCompra = document.createElement("ul");
        liCompra.innerHTML = "Compra $" + valorOficialCompra;
        contenedor.append(liCompra);

        const liVenta = document.createElement("ul");
        liVenta.innerHTML = "Venta $" + valorOficialVenta;
        contenedor.append(liVenta);

        // Dolar blue
        const nombreDolarBlue = jsonResponse[1].casa.nombre;
        const valorBlueCompra = jsonResponse[1].casa.compra;
        const valorBlueVenta = jsonResponse[1].casa.venta;

        const liNombreDolarBlue = document.createElement("h3");
        liNombreDolarBlue.innerHTML = nombreDolarBlue;
        contenedor.append(liNombreDolarBlue);

        const liCompraBlue = document.createElement("p");
        liCompraBlue.innerHTML = "Compra $" + valorBlueCompra;
        contenedor.append(liCompraBlue);

        const liVentaBlue = document.createElement("p");
        liVentaBlue.innerHTML = "Venta $" + valorBlueVenta;
        contenedor.append(liVentaBlue);
    });