class Animais {
  especie: string;

  constructor(especie: string) {
    this.especie = especie;
  }

  falar(): string {
    return `O bixo fez algum som`;
  }
}

class Cachorro extends Animais {
  nome: string;

  constructor(especie: string, nome: string) {
    super(especie);
    this.nome = nome;
  }

  falar(): string {
    return `O ${this.especie} latiu: au au auuuuuuuuuuuuuuuuuuuu`;
  }
}

class Gato extends Animais {
  nome: string;

  constructor(especie: string, nome: string) {
    super(especie);
    this.nome = nome;
  }

  falar(): string {
    return `O ${this.especie} miou: miau miau miaaaaaaaaaaaaaaauuuuuuuuuu`;
  }
}


const bichos: Animais[] = [
  new Cachorro('Cachorro', 'Rex'),
  new Gato('Gato', 'Mimi'),
  new Animais('Pombo')
];

bichos.forEach(bichos =>{
    console.log(bichos.falar())
}
)