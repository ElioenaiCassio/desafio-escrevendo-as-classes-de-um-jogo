
class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ["espada", "artes marciais", "magia", "shuriken"];
        this.classes = ["guerreiro", "monge", "mago", "ninja"];

    }

    atacar(){

        for (let index in this.classes){
            if (this.tipo == this.classes[index]) {
                this.ataque = this.ataque[index];
            }
        }

        // if (this.tipo == "guerreiro") {
        //     ataque = "espada"
        // } else if (this.tipo == "monge") {
        //     ataque = "artes marciais"
        // } else if (this.tipo == "mago") {
        //     ataque = "magia"
        // } else if (this.tipo == "ninja") {
        //     ataque = "shuriken"
        // }

        console.log(`O ${this.tipo} atacou usando ${this.ataque}`);
    }

}

let primeiroHeroi = new heroi("Pedro", "26", "guerreiro");
let segundoHeroi = new heroi("José", "31", "monge");
let terceiroHeroi = new heroi("Maria", "21", "mago");
let quartoHeroi = new heroi("Hanzo", "19", "ninja");

primeiroHeroi.atacar()
segundoHeroi.atacar()
terceiroHeroi.atacar()
quartoHeroi.atacar()