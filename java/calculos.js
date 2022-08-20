
function aumento1(mes, salarioDic) {
    let resutaldo = salarioDic + ((mes.porcentaje * salarioDic) / 100)
    alert(`Sueldo a ${mes.mes} ${resutaldo}`)
}

function aumentoAcumulativo(mes, salarioDic) {
    let aumentoAcumulativo= (salarioDic + ((mes.porcentaje * salarioDic) / 100)) * ((mes.porcentaje / 100) + 1)
        * ((mes.porcentaje / 100) + 1); 
    alert(`Sueldo acumulativo ${aumentoAcumulativo}`)
}


class Aumento {
    constructor(mes, porcentaje, salarioDic) {
        this.mes = mes;
        this.porcentaje = porcentaje;
        this.salarioDic = salarioDic;
    }
}

//NODOS
let seleccionar = document.getElementById("seleccionar");
let base = prompt("Seleccione Acumulativo o Base Diciembre").toLowerCase();


const incrementoSalarial = []

let salarioDic = parseFloat(prompt("INGRESE SU SALARIO A DICIEMBRE 2021"));


for (let i = 0; i < 3; i++) {

    let mes = prompt("INGRESE MES");;
    let porcentaje = parseFloat(prompt(`Ingrese % aumento ${mes}`));

    const mes1 = new Aumento(mes, porcentaje, salarioDic);

    incrementoSalarial.push(mes1);

}



if (base === "base diciembre") {

    //Base diciembre
    aumento1(incrementoSalarial[0], salarioDic)

    aumento1(incrementoSalarial[1], salarioDic)

    aumento1(incrementoSalarial[2], salarioDic)
} else if (base === "acumulativo") {

    aumentoAcumulativo(incrementoSalarial[0,1,2], salarioDic)
} else {
    alert("elegir")
}



/* class Aumento {
    constructor(mes, porcentaje, salarioDic) {
        this.mes = mes;
        this.porcentaje = porcentaje;
        this.salarioDic = salarioDic;
    }
}   */

//NODOS
/* let seleccionar = document.getElementById("seleccionar");
let base = prompt("Seleccione Acumulativo o Base Diciembre").toLowerCase();


const incrementoSalarial = []

let salarioDic = parseFloat(prompt("INGRESE SU SALARIO A DICIEMBRE 2021"));


for (let i = 0; i < 3; i++) {

     let mes = prompt("INGRESE MES");;
        let porcentaje = parseFloat(prompt(`Ingrese % aumento ${mes}`));
    
    const mes1 = new Aumento(this.mes, this.porcentaje, this.salarioDic);

    incrementoSalarial.push(mes1);

}

if (opcionSeleccionada === "BASE DICIEMBRE") {

    //Base diciembre
    aumento1(incrementoSalarial[0], salarioDic)

    aumento1(incrementoSalarial[1], salarioDic)

    aumento1(incrementoSalarial[2], salarioDic)
} else if (opcionSeleccionada === "ACUMULATIVO") {

    aumentoAcumulativo(incrementoSalarial[0, 1, 2], salarioDic)
} else {
    console.log("elegir")
}*/



