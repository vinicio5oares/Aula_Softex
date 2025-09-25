class Retangulo{

    constructor(largura, altura) {

        this.largura = largura;
        this.altura = altura;

    }

    area (){
        const calculoArea = this.largura*this.altura;
        return calculoArea
     
    }
    perimetro(){
        const calculoPerimetro = (this.largura+this.altura)*2;
        return calculoPerimetro
      
    }

    calculos() {
        this.area ();
        this.perimetro ();
        return `A area do retangulo é: ${this.area()} \nO perimetro do retangulo é: ${this.perimetro()} `

    }
}


const retangulo1 = new Retangulo (5, 3);
console.log(retangulo1.calculos());