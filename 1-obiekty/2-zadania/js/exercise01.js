const prod1 = {
    name : "Monitor",
    price : 620,
    weight: 5.3
}
const prod2 = {
    name : "Koszulka",
    price : 100,
    weight: 0.3
}

console.log( `Produkt numer jeden to: ${prod1.name}` );
console.log( `Produkt numer dwa to: ${prod2.name}` );
console.log( `Produkty kosztują razem: ${prod1.price + prod2.price}zł` );
console.log( `Produkty ważą razem: ${prod1.weight + prod2.weight}kg` );