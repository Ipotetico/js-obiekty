String.prototype.sortText = function(char) {
    const tab = this.split(char);
    tab.sort();
    return tab.join(char);
}

console.log( "Marcin-Ania-Piotrek-Beata".sortText('-') );

console.log( "Franek!Zuzia!Piotrek!Basia".sortText('!') );
