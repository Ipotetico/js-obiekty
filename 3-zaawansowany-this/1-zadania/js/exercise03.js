const freeza = {
    name : "Freeza",
    power : 86000000,
    print() {
        console.log(`
            Dane na temat bohatera:
            Nazwa: ${this.name}
            Moc: ${this.power}
        `);
    }
}

const goku = {
    name : "Goku",
    power : 100000000
}
goku.ownPrint = freeza.print.bind(goku);
goku.ownPrint();

freeza.print.call(goku);
goku.ownPrint();