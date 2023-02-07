// SIMULADOR PLAZO FIJO
// Clase
class Cliente {
    constructor(dni, nombre) {
        this.dni = dni;
        this.nombre = nombre;
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

const login = () => {
    let dni = document.getElementById("dniCliente").value;
    
    if (!clienteExiste(dni)) {
        messageDni.innerHTML = ("Cliente inexistente. Ingrese correctamente sus datos");
    } else {
        window.location = "plazo-fijo.html";
        const indiceCliente = obtenerIndiceDeClientePorDni(dni);
        messageDni.innerHTML = ("Bienvenido/a " + clientes[indiceCliente].nombre);
    }
}

const registerNewUser = () => {
    let newUserDni = document.getElementById("dniNuevoUsuario").value;
    let newUserName = document.getElementById("nombreNuevoUsuario").value;
    
    dniNewUser = clientes.push(new Cliente((newUserDni),(newUserName)));
    saveNewUser();
}

const saveNewUser = () => {
    localStorage.setItem("newUser", JSON.stringify(clientes));
}

const usersLS = () => {
    let clientes = [];
    const clientesLS = localStorage.getItem("newUser");

    if(clientesLS !== null) {
        clientes = JSON.parse(clientesLS);
    }
    return clientes;
}

const calcularPlazoFijo = (porcentaje, anual, mesesDelPlazoFijo) => {
    return (monto) => ((monto * porcentaje) / 100) / anual * mesesDelPlazoFijo;
}

// H2 AGREGADO POR DOM
let title = document.createElement("h2");
title.classList.add("title");
title.innerHTML = "<h2>CoderBANK</h2>";
contenido.insertAdjacentElement("afterbegin", title)
title.before(title);


// INICIA PROGRAMA
const clientes = usersLS ();
const plazoFijoUnMes = calcularPlazoFijo(70, 12, 1);
const plazoFijoTresMeses = calcularPlazoFijo(76, 12, 3);
const plazoFijoDoceMeses = calcularPlazoFijo(85, 12, 12);

function invertir () {
    let monto = Number(document.getElementById("capital").value);
    let datos = document.getElementById("datos");

    if (document.getElementById("unMes").checked){
        plazoFijoUnMes();
        datos.innerHTML = ("Por su inversión de $" + monto + " usted recibirá en un mes la suma de $" + (plazoFijoUnMes(monto) + monto).toFixed(2));
    } 
    else if (document.getElementById("tresMeses").checked){
        plazoFijoTresMeses();
        datos.innerHTML = ("Por su inversión de $" + monto + " usted recibirá en tres meses la suma de $" + (plazoFijoTresMeses(monto) + monto).toFixed(2));
    }
    else if (document.getElementById("doceMeses").checked){
        plazoFijoDoceMeses();
        datos.innerHTML = ("Por su inversión de $" + monto + " usted recibirá en doce meses la suma de $" + (plazoFijoDoceMeses(monto) + monto).toFixed(2));
    }
    else{
        datos.innerHTML=("Seleccione el tiempo deseado del Plazo Fijo");
    }
}

