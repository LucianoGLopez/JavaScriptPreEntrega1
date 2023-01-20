// SIMULADOR PLAZO FIJO
class Cliente {
    constructor(nombre, dni) {
        this.nombre = nombre;
        this.dni = dni;
    }
}

//Funciones
const obtenerIndiceDeClientePorDni = (dni) => {
    let indiceCliente = 0;
    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].dni === dni) {
            indiceCliente = i;
            break;
        }
    }
    return indiceCliente;
}

const clienteExiste = (dni) => {
    let encontrado = false;
    for (const cliente of clientes) {
        if (cliente.dni === dni) {
            encontrado = true;
            break;
        }
    }
    return encontrado;
}

const solicitarDniUsuario = () => {
    let dni = prompt("Por favor ingrese DNI del cliente");

    while (!clienteExiste(dni)) {
        dni = prompt("Acceso denegado. DNI incorrecto. Ingrese correctamente el DNI");
    }
    
    const indiceCliente = obtenerIndiceDeClientePorDni(dni);
    alert("Bienvenido/a " + clientes[indiceCliente].nombre);
}

const calcularPlazoFijo = (porcentaje, anual, mesesDelPlazoFijo) => {
    return (monto) => ((monto * porcentaje) / 100) / anual * mesesDelPlazoFijo;
}

// // INICIA PROGRAMA
alert("SIMULADOR DE PLAZO FIJO")

const clientes = [
    new Cliente("Luciano", "111222333"),
    new Cliente("Fiamma", "222333444"),
    new Cliente("Anakin", "333444555"),
];

solicitarDniUsuario();

const plazoFijoUnMes = calcularPlazoFijo(70, 12, 1);
const plazoFijoTresMeses = calcularPlazoFijo(76, 12, 3);
const plazoFijoDoceMeses = calcularPlazoFijo(85, 12, 12);

let monto = parseInt(prompt("Ingrese el monto que desea invertir en Plazo Fijo:"));
let simulador = prompt("Elija el plazo estimado: 1- UN MES (70% anual) | 2- TRES MESES (76% anual) | 3- DOCE MESES (85% anual) | 4- Salir");

while (simulador !== "Salir" && simulador !== "salir" && simulador !== "SALIR" && simulador !== "4") {
    switch (simulador) {
        case "1":
            plazoFijoUnMes();
            alert("Por su inversión de $" + monto + " usted recibirá en un mes la suma de $" + (plazoFijoUnMes(monto) + monto));
            break;

        case "2":
            plazoFijoTresMeses();
            alert("Por su inversión de $" + monto + " usted recibirá en tres meses la suma de $" + (plazoFijoTresMeses(monto) + monto));
            break;

        case "3":
            plazoFijoDoceMeses();
            alert("Por su inversión de $" + monto + " usted recibirá en doce meses la suma de $" + (plazoFijoDoceMeses(monto) + monto));
            break;

        default:
            alert("Opción incorrecta");
            break;
    }

    simulador = prompt("Elija el plazo estimado: 1- UN MES (70% anual) | 2- TRES MESES (76% anual) | 3- DOCE MESES (85% anual) | 4- Salir");
}
alert("Gracias por utilizar nuestros servicios");