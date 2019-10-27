const currentUser = {
    name : "Jan",
    surname : "Kowalski",
    email: "jan-kowalski@gmail.com",
    www: 'jankowalski.pl',
    userType : 'editor',

    show() {
        const text = `
            Imię: ${this.name}
            Nazwisko: ${this.surname}
            Email: ${this.email}
            www: ${this.www}
            userType: ${this.userType}
        `
        console.log(text);
    }
}

currentUser.show();