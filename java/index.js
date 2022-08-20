class Aumento {
    constructor(mes, porcentaje, salarioDic) {
        this.mes = mes;
        this.porcentaje = porcentaje;
        this.salarioDic = salarioDic;
    }
}

//funciones para calcular aumentos
function aumento1(mes, salarioDic) {
    let resutaldo = parseFloat(salarioDic) + parseFloat((mes.porcentaje * salarioDic) / 100)
    console.log(`Sueldo a ${mes.mes} ${resutaldo}`)
}

function aumentoAcumulativo(mes, salarioDic) {
    let aumentoAcumulativo = (parseFloat(salarioDic) + parseFloat((mes.porcentaje * salarioDic) / 100)) * (parseFloat(mes.porcentaje / 100) + 1)
    /** parseFloat((mes.porcentaje / 100) + 1); */
    console.log(`Sueldo acumulativo ${aumentoAcumulativo}`)
}

//funcion que dice si ya hay datos cargados de esa persona o no
let nombreUsuario;

document.getElementById("formularioUsuario").addEventListener("submit", manejadorFormularioUsuario);
function manejadorFormularioUsuario(e) {
    e.preventDefault();

    nombreUsuario = document.getElementById("user").value;

    let listaDeMeses = document.getElementById("listaDeMeses");
    const meses = JSON.parse(localStorage.getItem(nombreUsuario));

    meses == null ? listaDeMeses.innerHTML = "<h2>No hay meses seleccionados</h2>" : mostrarMeses(meses);
    validarFormulario(e);

}

//muestra los meses si es que ya anteriormente los han cargado
function mostrarMeses(meses) {
    let listaDeMeses = document.getElementById("listaDeMeses");
    listaDeMeses.innerHTML = "" //para que se vacíe la página

    meses.forEach(mes => {
        let li = document.createElement("li");
        li.innerHTML = `
        ${mes.mes.toUpperCase()} - ${mes.porcentaje}% - AR$${mes.salarioDic}`;
        const botonBorrar = document.createElement("button");
        botonBorrar.innerText = "Borrar";
        //se ejecuta unicamente cuando le doy click
        botonBorrar.addEventListener("click", () => {
            eliminarMes(mes);
        })
        li.appendChild(botonBorrar);
        listaDeMeses.appendChild(li);
    });
}

//validacion formulario

function validarFormulario(e) {
    let formulario = document.getElementById("formularioUsuario");
    //preventDefaul par que no se borren los datos
    e.preventDefault();

    if (e.target.children[3].value.includes("@") && e.target.children[3].value.includes(".com")) {
        let mensaje = document.createElement("div");
        mensaje.innerHTML = "Tus datos fueron registrados"
        Swal.fire(`Bienvenido 
        ${nombreUsuario}`)
            ;
        mensaje.className = "azulOscuro";
        setTimeout(() => {
            mensaje.remove("mensaje");
        }, 7000);
        formulario.append(mensaje)
    } else {
        let mensaje = document.createElement("div");
        mensaje.innerHTML = "Datos incorrectos"
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'NO HAS COMPLETADO TODOS TUS DATOS!',
            footer: '<a href="">Why do I have this issue?</a>'
        })
        mensaje.className = "rojo";
        setTimeout(() => {
            mensaje.remove("mensaje");
        }, 7000);
        formulario.append(mensaje)
        e.target.children[3].value = "";
    }

    mostrarPanel();
}

//Bienvenida y seleccion del metodo para calcular aumento
function mostrarPanel() {

    const bievenida = document.getElementById("opciones");

    bievenida.innerHTML =

        `<h3> Bienvenido ${nombreUsuario}</h3>
        <h4>Seleccione Aumento -Base Diciembre o Acumulativo-</h4>`

    //seleccionar metodo
    let eleccion = document.getElementById("eleccion");
    eleccion.innerHTML =
        `<select id="select" name="menu">
    <option value="0">...</option>
    <option  value="BASE DICIEMBRE">BASE DICIEMBRE</option>
    <option value="ACUMULATIVO">ACUMULATIVO</option>
    </select>`

    document.getElementById("select").addEventListener("change", () => {
        let opcionSeleccionada = document.getElementById("select").value;

        const opciones = document.getElementById("seleccionar");

        if (opcionSeleccionada === "BASE DICIEMBRE") {
            seleccionar.innerHTML = "<h4>BASE DICIEMBRE</h4>";
            seleccionar.className = "azulOscuro";

        } else if (opcionSeleccionada === "ACUMULATIVO") {
            seleccionar.innerHTML = "<h4>ACUMULATIVO</h4>";
            seleccionar.className = "azulOscuro";

        } else {
            seleccionar.innerHTML = "<h4>SELECCIONE METODO</h4>";
            seleccionar.className = "rojo";

        }

        opciones.innerHTML +=
            `<form id="formulario-mes">
    <input type="text" id="mes" placeholder="MES">
    <input type="number" id="porcentaje" placeholder="Porcentaje">
    <input type="text" id="salarioDic" placeholder="Salario Diciembre">
    <button type="submit">Agregar mes</button>
    </form>`

        document.getElementById("formulario-mes").addEventListener("submit", agregarMes);

    })
}

//agregar mes y calcular datos
function agregarMes(e) {
    e.preventDefault();

    const mes = document.getElementById("mes").value;
    const porcentaje = document.getElementById("porcentaje").value;
    const salarioDic = document.getElementById("salarioDic").value;

    const mes1 = new Aumento(mes, porcentaje, salarioDic);

    const mesesEnLocalStorage = JSON.parse(localStorage.getItem(nombreUsuario));

    if (mesesEnLocalStorage == null) {
        localStorage.setItem(nombreUsuario, JSON.stringify([mes1]));
        mostrarMeses([mes1]);
    } else {
        mesesEnLocalStorage.push(mes1);
        localStorage.setItem(nombreUsuario, JSON.stringify(mesesEnLocalStorage));
        mostrarMeses(mesesEnLocalStorage);
    }
    e.target.reset();


    //FORMULA PARA CALCULAR AUMENTO
    const opcionSeleccionada = document.getElementById("select").value;
    console.log("La opcion elegida es: " + opcionSeleccionada);


    //???????
    const incrementoSalarial = []

    for (let i = 0; i < 3; i++) {

        const mes1 = new Aumento(mes, porcentaje, salarioDic);

        incrementoSalarial.push(mes1);

    }

    if (opcionSeleccionada === "BASE DICIEMBRE") {

        //Base diciembre
        aumento1(incrementoSalarial[0], salarioDic)

        /*  aumento1(incrementoSalarial[1], salarioDic)
 
         aumento1(incrementoSalarial[2], salarioDic) */
    } else if (opcionSeleccionada === "ACUMULATIVO") {

        aumentoAcumulativo(incrementoSalarial[0, 1, 2], salarioDic)
    } else {
        console.log("elegir")
    }



}


//funcion para eliminar meses o datos
function eliminarMes(mes) {
    console.log(mes);
    const mesesEnLocalStorage = JSON.parse(localStorage.getItem(nombreUsuario));
    const nuevoArray = mesesEnLocalStorage.filter(item => item.mes != mes.mes);
    localStorage.setItem(nombreUsuario, JSON.stringify(nuevoArray));
    mostrarMeses(nuevoArray);
}
























