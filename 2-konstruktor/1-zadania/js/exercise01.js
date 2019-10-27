function Car(name, brand, engine, mile, age) {
    this.name = name;
    this.brand = brand;
    this.engine = engine;
    this.mile = mile;
    this.age = age;
}

const car1 = new Car("Maluch", "Fiat", 100, 0, 0);
console.log(car1);

const car2 = new Car("Opel Astra", "Opel", 1.4, 0, 0);
console.log(car2);

const car3 = new Car("BMW e46", "BMW", 318, 0, 0);
console.log(car3);