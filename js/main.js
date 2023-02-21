// SIMULADOR PLAZO FIJO
// Clase
class Cliente {
    constructor(dni, nombre, password) {
        this.dni = dni;
        this.nombre = nombre;
        this.password = password;
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

const clienteExistePassword = (password) => {
    let encontrado = false;
    for (const cliente of clientes) {
        if (cliente.password === password) {
            encontrado = true;
            break;
        }
    }
    return encontrado;
}

const clienteExisteDni = (dni) => {
    let encontrado = false;
    for (const cliente of clientes) {
        if (cliente.dni === dni) {
            encontrado = true;
            break;
        }
    }
    return encontrado;
}

const clienteExisteNombre = (nombre) => {
    let encontrado = false;
    for (const cliente of clientes) {
        if (cliente.nombre === nombre) {
            encontrado = true;
            break;
        }
    }
    return encontrado;
}

const login = () => {
    let password = document.getElementById("passwordCliente").value;
    let dni = document.getElementById("dniCliente").value;
    let nombre = document.getElementById("usuarioCliente").value;

    if ((!clienteExisteDni(dni)) || (!clienteExistePassword(password)) || (!clienteExisteNombre(nombre))) {
        swal("Usuario o contraseña incorrectos. ", "Intente nuevamente.", "error");
    } else {
        const indiceCliente = obtenerIndiceDeClientePorDni(dni);
        swal({
            title: "Bienvenido/a " + clientes[indiceCliente].nombre,
            icon: "success",
            buttons: false,
            timer: 1500,
        })
        setTimeout(() => {
            window.location = "plazo-fijo.html";
        }, 2000)
    }
}

const registerNewUser = () => {
    let newUserDni = document.getElementById("dniNuevoUsuario").value;
    let newUserName = document.getElementById("nombreNuevoUsuario").value;
    let newUserPassword = document.getElementById("passwordNuevoUsuario").value;

    dniNewUser = clientes.push(new Cliente((newUserDni), (newUserName), (newUserPassword)));
    saveNewUser();
    swal("Registro exitoso. ", "Bienvenido/a " + newUserName, "success");
}

const saveNewUser = () => {
    localStorage.setItem("newUser", JSON.stringify(clientes));
}

const usersLS = () => {
    let clientes = [];
    const clientesLS = localStorage.getItem("newUser");

    if (clientesLS !== null) {
        clientes = JSON.parse(clientesLS);
    }
    return clientes;
}

const calcularPlazoFijo = (porcentaje, anual, mesesDelPlazoFijo) => {
    return (monto) => ((monto * porcentaje) / 100) / anual * mesesDelPlazoFijo;
}

// INICIA PROGRAMA
const clientes = usersLS ();
const plazoFijoUnMes = calcularPlazoFijo(70, 12, 1);
const plazoFijoTresMeses = calcularPlazoFijo(76, 12, 3);
const plazoFijoDoceMeses = calcularPlazoFijo(85, 12, 12);

function invertir () {
    let monto = Number(document.getElementById("capital").value);

    if (document.getElementById("unMes").checked) {
        plazoFijoUnMes ();
        swal({
            title: "Plazo fijo un mes",
            text: "Por su inversión de $" + monto + " usted recibirá en un mes la suma de $" + (plazoFijoUnMes(monto) + monto).toFixed(2),
            icon: "info",
            buttons: ["Cancelar", "Invertir"],
        })
    }
    else if (document.getElementById("tresMeses").checked) {
        plazoFijoTresMeses ();
        swal({
            title: "Plazo fijo tres meses",
            text: "Por su inversión de $" + monto + " usted recibirá en tres meses la suma de $" + (plazoFijoTresMeses(monto) + monto).toFixed(2),
            icon: "info",
            buttons: ["Cancelar", "Invertir"]
        })
    }
    else if (document.getElementById("doceMeses").checked) {
        plazoFijoDoceMeses ();
        swal({
            title: "Plazo fijo doce meses",
            text: "Por su inversión de $" + monto + " usted recibirá en doce meses la suma de $" + (plazoFijoDoceMeses(monto) + monto).toFixed(2),
            icon: "info",
            buttons: ["Cancelar", "Invertir"]
        })
    }
    else {
        swal("Imposible procesar su solicitud", "Por favor seleccione una opción", "error");
    }
}