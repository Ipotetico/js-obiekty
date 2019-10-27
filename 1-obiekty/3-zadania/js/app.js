const spaceShip = {
    name : "Enterprise",
    currentLocation : "Earth",
    flyDistance : 0,

    flyTo(place, distance) {
        this.currentLocation = place;
        this.distance += distance;
    },

    showInfo() {
        const text = `
        Informacje o statku:
        --------------------
        Statek ${this.name}
        doleciał do miejsca ${this.currentLocation}
        Statek przeleciał już całkowity dystans ${this.flyDistance}
        `;
        console.log(text);
    },

    meetClingon() {
        let defence = 0;

        for (let i=0; i<100; i++) {
            if (Math.random() > 0.5) {
                defence++;
            }
        }

        if (defence > 50) {
            console.log(`Statek ${this.name} będący w okolicy ${this.currentLocation} zwycięsko wyszedł ze spotkania z Klingonami`);
        } else {
            console.log(`Statek ${this.name} będący w okolicy ${this.currentLocation} został pokonany przez Klingonów`)
        }
    }
}

spaceShip.flyTo("Mars", 54000000);
spaceShip.flyTo("Jowisz", 770000000);
spaceShip.showInfo();
spaceShip.meetClingon();