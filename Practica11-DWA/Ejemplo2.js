let estudiante = [
    {nombre: "Dexi",  nota:9},
    {nombre: "Dario",  nota:8},
    {nombre: "Elias",  nota:3},
];

//Crear una copia usando spread, para modificar la nota de datos

let estudianteModificados = estudiante.map(estudiante =>
    estudiante.nombre === "Elias"
    ? {...estudiante, nota: 9}
    :{...estudiante}
);

console.log(estudianteModificados);
console.log(estudiante);


    
