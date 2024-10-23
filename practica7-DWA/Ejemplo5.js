//Objeto cob varias propiedades
const producto = {
    nombre: "Laptop",
    precio: 800,
    disponible: true
};

//Uso del bucle para iterrar sobre las propiedades del objeto
for (let propiedad in producto){
    console.log(`${producto[propiedad]}`);
}