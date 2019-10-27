const tableGenerator = {
    randomNumber(min, max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    },

    generateIncTable(lng) {
        const tab = [];
        for (let i=0; i<lng; i++) {
            tab.push(i);
        }
        return tab;
    },

    generateRandomTable(lng, min, max) {
        const tab = [];
        for (let i=0; i<lng; i++) {
            tab.push(this.randomNumber(min, max));
        }
        return tab;
    },

    generateTableFromText(str) {
        let tab = [];
        if (typeof str !== "string" && str.indexOf(' ') !== -1) {
            tab = str.split(" ");
        } else {
            tab = [];
        }
        return tab;
    },

    getMaxFromTable(arr) {
        //można tak
        //return Math.max(...arr);
        //ale w ramach treningu pętli...
        let max = arr[0];
        for (let i=1; i<arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i]
            }
        }
        return max
    },

    getMinFromTable(arr) {
        let min = arr[0];
        for (let i=1; i<arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i]
            }
        }
        return min
    },

    delete(arr, index)  {
        if (arr.length >= index) {
            arr.splice(index, 1);
        }
    },

}