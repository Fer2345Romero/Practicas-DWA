// Objeto que contiene propiedades con otros objetos como propiedades
const estudiante = {
    nombre: 'Fernnada',
    edad: 21,
    direccion: {
        calle: 'final calle sirama',
        ciudad: 'Morázan'
    },
    materias: ['Contabilidad', 'Programacion', 'Bases de Datos']
};

// Acceso de la propiedades anidades 
console.log(estudiante.direccion.ciudad)
console.log(estudiante.materias[1])