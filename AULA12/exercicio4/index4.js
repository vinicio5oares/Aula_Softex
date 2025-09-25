class ContaBancaria {
    #saldo = 0;
    constructor (saldo) {
        this.#saldo = saldo;

    }

    depositar (valor) {
        this.#saldo += valor;
        return `Voce depositou ${valor} \nSeu novo saldo é ${this.#saldo}`
        // return this.#saldo;
        
    }       

    sacar(valor) {
       if (valor > this.#saldo) {
        return "saldo insuficiente"
       }
       else{
        this.#saldo -= valor;
        return `Voce sacou ${valor} \n`
        // return this.#saldo
       }
        
    }


    verSaldo() {
       return `Seu saldo atual é: R$ ${this.#saldo.toFixed(2)}`;
    }
}


let minhaConta = new ContaBancaria(0);

console.log( minhaConta.depositar(100));
console.log(minhaConta.sacar(30));
console.log(minhaConta.verSaldo());