

class Aumento {
    constructor(mes, porcentaje, salarioDic) {
        this.mes = mes;
        this.porcentaje = porcentaje;
        this.salarioDic = salarioDic;
    }
}
//base diciembre
function aumento1(mes, salarioDic) {
    let resutaldo = salarioDic + ((mes.porcentaje * salarioDic) / 100)
    console.log(`Sueldo a ${mes.mes} ${resutaldo}`)
}

//calculo de porcentaje

function calculoPorcentaje (salarioDic, porcentaje){
let resultado= (parseFloat(porcentaje) / 100) + 1;
console.log(resultado);
}

//funcion aumento acumulativo
function aumentoAcumulativo(aumento1, calculoPorcentaje){
    let aumentoAcumulativo= parseFloat (aumento1) * parseFloat (calculoPorcentaje);
    console.log (`Sueldo acumulativo ${aumentoAcumulativo}`)
}



//zurda
/* function ultimoAcumulado() {
    meses = []
    meses.forEach(function aumentoAcumulativo(mes, salarioDic) {
        if (mes === 12) {
            salarioDic = salarioDic + ((mes.porcentaje * salarioDic) / 100)
        } else {
            let aumentoAcumulativo = (salarioDic + ((mes.porcentaje * salarioDic) / 100)) * ((mes.porcentaje / 100) + 1)
                * ((mes.porcentaje / 100) + 1);
            console.log (`Sueldo acumulativo ${aumentoAcumulativo}`)
        }
        total = salarioDic + aumentoAcumulativo
        return total
    });

} */

/* function aumentoAcumulativo(mes, salarioDic) {
    let aumentoAcumulativo = (salarioDic + ((mes.porcentaje * salarioDic) / 100))
    console.log (aumentoAcumulativo)
        let n = 0;
        let porcentajes = ((mes.porcentaje / 100) + 1);
        console.log (porcentajes)
    while (n <= 2) {
        porcentajes = porcentajes;
        aumentoAcumulativo = aumentoAcumulativo * porcentajes;
        n = n + 1;
        console.log(aumentoAcumulativo)
    }
} */

/*  function aumentoAcumulativo(mes, salarioDic) {
    let aumentoAcumulativo= (salarioDic + ((mes.porcentaje * salarioDic) / 100)) * ((mes.porcentaje / 100) + 1)
        * ((mes.porcentaje / 100) + 1); 
    console.log (`Sueldo acumulativo ${aumentoAcumulativo}`)
  /*   alert(`Sueldo acumulativo ${aumentoAcumulativo}`) 
} 
 */


//NODOS
let seleccionar = document.getElementById("seleccionar");
let base = prompt("Seleccione Acumulativo o Base Diciembre").toLowerCase();
console.log(base)

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

/*     aumento1(incrementoSalarial[1], salarioDic)

    aumento1(incrementoSalarial[2], salarioDic) */
} else if (base === "acumulativo") {
/* ultimoAcumulado ()
console.log(ultimoAcumulado); */
  aumentoAcumulativo(incrementoSalarial[0, 1, 2], salarioDic)
} else {
    alert("elegir")
}



/* //funcion que sirve base diciembre
function aumento1() {
    let resutaldo = parseFloat (mes1.salarioDic) + (parseFloat((mes1.porcentaje * salarioDic) / 100));
    console.log(`Sueldo a ${mes1.mes} ${resutaldo}`)
} */




const opcionSeleccionada = document.getElementById("select").value;
console.log("La opcion elegida es: " + opcionSeleccionada);
