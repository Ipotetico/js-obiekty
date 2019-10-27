const book = {
    users : [],

    addUser(name, age, phone) {
        const user = {
            name: name, //można też name
            age: age,
            phone: phone
        }

        this.users.push(user);
    },

    showUsers() {
        console.log(`Wszyscy użytkownicy w książce`);

        this.users.forEach(function(user) {
            console.log(`
                użytkownik: ${user.name}
                age: ${user.age}
                phone: ${user.phone}
            `);
        })
    },

    findByName(name) {
        const findUser = this.users.find(function(user) {
            return user.name === name;
        });

        if (this.findUser) {
            return this.findUser;
        } else {
            return false;
        }
    },

    findByPhone(phone) {
        const findUser = this.users.find(function(user) {
            return user.phone === phone;
        });

        if (this.findUser) {
            return this.findUser;
        } else {
            return false;
        }
    },

    getCount() {
        return this.users.length;
    }
}


book.addUser("Marcin", 15, "500-600-235");
book.addUser("Anna", 25, "500-600-120");
book.addUser("Michał", 18, "530-600-700");
book.addUser("Karol", 12, "520-500-100");
book.addUser("Piotrek", 22, "200-600-200");

book.showUsers();
book.getCount(`W książce jest ${book.getCount()} użytkowników`);

const userByName = book.findByName("Marcin");
console.log(userByName);

const userByPhone = book.findByPhone("520-500-100");
console.log(userByPhone);


