class Pessoa {
    nome: string;
    age: number;

    cumprimentar(nome: string) {
        console.log(`Olá, ${nome}!`);
    }
}

interface Teste {
    salario: number;
    comer(): void;
}

class Usuario extends Pessoa implements Teste {
    salario: number;
    comer(): void {
        console.log("comendo..");
    }
}

const user = new Usuario();
