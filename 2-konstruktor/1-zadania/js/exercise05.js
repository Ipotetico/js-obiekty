Array.prototype.sum = function() {
    return this.reduce(function(a, b) {
        return a + b
    }, 0)
}

Array.prototype.sortNr = function() {
    return this.sort(function(a, b) {
        return a - b;
    })
}

console.log([1,2,3].sum());
console.log([1,1.2,11,22,2.1].sortNr());