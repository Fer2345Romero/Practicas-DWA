//Objeto que incluye métodos para realizar acciones
const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    encender: function(){
        console.log('El coche esta encendido')
    },
    apagar: function(){
        console.log('El coche esta apagado')
    }
};
// Uso de los métodos del objeto
coche.encender();
coche.apagar();