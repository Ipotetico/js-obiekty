const text = {
    check(txt, word) {
        return txt.includes(word);
        //lub
        //return txt.indexOf(word) !== -1
    },

    getCount(txt) {
        return txt.split(" ").join("").length;
    },

    getWordsCount(txt) {
        return txt.split(" ").length;
    },

    setCapitalize(txt) {
        const tab = txt.split(" ");
        return tab.map(function(el) {
            return el[0].toUpperCase() + el.substr(1);
        }).join(" ");
    },

    setMix(txt) {
        let newStr = "";
        for (let i=0; i<txt.length; i++) {
            if (i % 2 === 0) {
                newStr += txt[i].toUpperCase();
            } else {
                newStr += txt[i].toLowerCase();
            }
        }
        return newStr;
    },

    generateRandom(lng) {
        //a === 65
        //z === 90
        const min = 65;
        const max = 90;
        const tab = [];

        for (let i=0; i<lng; i++) {
            const letterCode = Math.floor(Math.random()*(max-min+1)+min);
            tab.push(letterCode);
        }

        return String.fromCharCode(...tab);
    }
}


const txt = "Koty są fajne i psy też takie są";
console.log(`
Tekst bez zmian:
${txt}
`);
console.log("");

console.log("Czy w tekście jest słowo kot:");
console.log(text.check(txt, "kot"));
console.log("");

console.log("Ile znaków:");
console.log(text.getCount(txt, "kota"));
console.log("");

console.log("Ile słów:");
console.log(text.getWordsCount(txt));
console.log("");

console.log("Każde słowo z dużej litery:")
console.log(text.setCapitalize(txt));
console.log("");

console.log("Ze zmiksowanymi wielkościami liter:")
console.log(text.setMix(txt));
console.log("");

console.log("20 znakowy losowy ciąg znaków:")
console.log(text.generateRandom(20));
console.log("");