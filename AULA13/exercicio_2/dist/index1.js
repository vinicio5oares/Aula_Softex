"use strict";
class Animais {
    constructor(especie) {
        this.especie = especie;
    }
    falar() {
        return `O ${this.especie} fez algum som`;
    }
}
class Cachorro extends Animais {
    constructor(especie, nome) {
        super(especie);
        this.nome = nome;
    }
    falar() {
        return `O ${this.especie} latiu: au au auuuuuuuuuuuuuuuuuuuu`;
    }
}
class Gato extends Animais {
    constructor(especie, nome) {
        super(especie);
        this.nome = nome;
    }
    falar() {
        return `O ${this.especie} miou: miau miau miaaaaaaaaaaaaaaauuuuuuuuuu`;
    }
}
const bichos = [
    new Cachorro('Cachorro', 'Rex'),
    new Gato('Gato', 'Mimi'),
    new Animais('Pombo')
];
bichos.forEach(bichos => {
    console.log(bichos.falar());
});
