//"use strict";
{
    const ob = {
        name : "Kwiatek",

        init() {
            console.log("Nazywam się " + this.name);

            function showText() {
                console.log(this);
                console.log("Nazywam się " + this.name);
            }

            showText();
        }
    }

    ob.init();
}

//Odpalana jest funkcja init().
//Wewnątrz odpalana jest funkcja showText(), która odwołuje się do this.name, czyli teoretycznie do właściwości
//name z obiektu ob. Niestety dostajemy undefined. Wynika to z tego, że funkcje showText() nie odpala obiekt,
//czyli wewnątrz jej zmienia się kontekst this na window lub undefined (jeżeli użyjemy use strict)
