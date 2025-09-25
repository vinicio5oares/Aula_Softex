class Carro{
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    detalhes (){
        return`Marca: ${this.marca} \nModelo: ${this.modelo} \nAno: ${this.ano}`;
    }

}

const carro1 = new Carro("Toyota","Corolla", 2025);
console.log(carro1.detalhes());

const carro2 = new Carro("Fiat", "UNO", 2020);
console.log(carro2.detalhes());