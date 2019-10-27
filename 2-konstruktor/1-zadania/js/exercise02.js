function Enemy(name, live, speed, attack, posX) {
    this.name = name;
    this.live = live;
    this.speed = speed;
    this.attack = attack;
    this.posX = posX;
}

Enemy.prototype.move = function(newPos) {
    this.posX = this.posX - this.speed;
    console.log(`Jestem ${this.name}. Znajduję się na pozycji ${this.posX}`);
}

Enemy.prototype.attackEnemy = function() {
    console.log(`Jestem ${this.name}. Atakuję gracza z pozycji ${this.posX} z siłą ${this.attack}`)
}

Enemy.prototype.hit = function() {
    this.live--;
    console.log(`Jestem ${this.name}. Mam teraz życia ${this.live}`);
}


const enemy1 = new Enemy("ship1", 10, 5, 10, 1000);
enemy1.move();
enemy1.move();
enemy1.move();
enemy1.attackEnemy();
enemy1.hit();

const enemy2 = new Enemy("ship2", 15, 7, 8, 1000);
enemy2.move();
enemy2.move();
enemy2.hit();