class Funcionario {
  constructor(nome, salario) {
    this.nome = nome;
    this.salario = salario;
  }

  descricao() {
    return `Funcionário ${this.nome} \nSalário: ${this.salario}`;
  }
}


class Gerente extends Funcionario {
  constructor(nome, salario, departamento) {
    super(nome, salario); 
    this.departamento = departamento;
  }

  descricao() {
    return `Gerente ${this.nome} \nSalário: ${this.salario}, \nDepartamento: ${this.departamento}`;
  }
}


const funcionarios = new Funcionario("pedro", 2342);
const gerentes = new Gerente("jorge", 4535, "TI");

console.log(funcionarios.descricao()); 
console.log(gerentes.descricao()); 
