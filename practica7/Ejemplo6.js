var factura = {
    numero: 201,
    divisa: "dolares",
    cliente: "Libreria Milafros",
    total: 600,
    IVA: 78
}

var numeroFactura = factura.numero;
var monedadFactura = factura.divisa;
var totalFactura = factura.total;
console.log('La factura ' + numeroFactura + ' es de ' + totalFactura + ' ' + monedadFactura);