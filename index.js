class Game {
  constructor(name, idade, tipo) {
    this.name = name;
    this.idade = idade; 
    this.tipo = tipo;
    this.tipoHero = ["Mago", "Guerreiro", "Monje", "Ninja"];
  }

  attack() {
    for (let i = 0; i < this.tipoHero.length; i++) {
      if (i === 0 && this.tipo === "Mago") {
        console.log(`O ${this.tipo} ${this.name} atacou usando magia!`);
      } else if (i === 1 && this.tipo === "Guerreiro") {
        console.log(`O ${this.tipo} ${this.name} atacou usando espada!`);
      } else if (i === 2 && this.tipo === "Monje") {
        console.log(`O ${this.tipo} ${this.name} atacou usando artes marciais!`);
      } else if (i === 3 && this.tipo === "Ninja") {
        console.log(`O ${this.tipo} ${this.name} atacou usando shuriken!`);
      }
    }
  }
}

let heroi0 = new Game("Reydson", 22, "Mago"); 
let heroi1 = new Game("André", 27, "Guerreiro");
let heroi2 = new Game("Jorge", 21, "Monje");
let heroi3 = new Game("João", 20, "Ninja");

heroi0.attack();
heroi1.attack();
heroi2.attack();
heroi3.attack();
