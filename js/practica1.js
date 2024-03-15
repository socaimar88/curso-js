let nombre="Fred";
let apellido="Solis"
const SALARIO=1300000;

let Saludo= "Hola "+ nombre + " "+ apellido;
console.log(Saludo);
console.log("Su sarario es: ",SALARIO);

// ejercicio de utilizacion de prompt y if
const salarioMinimo=1300000;
let nombreEmpleado;
let salarioEmpleado;

nombreEmpleado=prompt("Ingrese el nombre del empleado");
salarioEmpleado=prompt("Ingrese el salario del empleado");

if (salarioEmpleado<= salarioMinimo*2){
    alert("El Empleado "+nombreEmpleado+" Si aplica auxilio de trasporte");
}
else{
    alert("El Empleado "+nombreEmpleado+" No aplica auxilio de trasporte");
}
