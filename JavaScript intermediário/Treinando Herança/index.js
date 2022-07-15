/*class Animal{
    constructor(){
        this.nome= nome=prompt("Qual o nome do animal?")
        this.idade= idade=prompt("Qual o idade do animal?")
    }
}
class Cachorro extends Animal{
    late(){
        let info= new Animal()
        alert("O cachorro "+info.nome+" de "+info.idade+" anos faz:\nAU AU AU")
    }

    }

class Peixe extends Animal{
    nada(){

      let info= new Animal()  
      alert("O peixe "+info.nome+" de "+info.idade+" anos faz: \nGLUB GLUB GLUB")
      

    }
}
class Pássaro extends Animal{
    canta(){
        let info= new Animal()
        alert("O pássaro "+info.nome+" de "+info.idade+" anos faz: \nBEM-TE-VI")
        
    }
}
function op(){
    let choseOp

    while(choseOp == "1" && choseOp == "2" && choseOp == "3"){

        choseOp= prompt("Qual animal deseja ouvir?\n1-Cachorro\n2-Peixe\n3-Pássaro\nPressione qualquer botão para voltar ao Menu")
        switch(choseOp){
            case "1":
            let action = new Cachorro()
            action.late()
            op()
            break;
            case "2":
            let action2 = new Peixe()
            action2.nada()
            op()
            break;
            case "3":
            let action3= new Pássaro()
            action3.canta()
            op()
            break;
            default:
            showMenu()
            break;
        }
    }
}

function showMenu(){

    let choseOp

    while(choseOp!="1" && choseOp != "2"){

        choseOp=prompt("O que deseja fazer?\n1-Ouvir animal\n2-Sair")

        switch(choseOp){
            case "1":
            op()
            break;
            case "2":
            alert("Até logo!")
            break;
            default:
            alert("Opção inválida, tente novamente")
            showMenu()
            break;
        }
    }
}
showMenu()

/*
class Banco {
  constructor() {
    this.saldo = 0
  }
  
  sacar(quantidade) {
    this.saldo -= quantidade
  }
  
  depositar(quantidade) {
    this.saldo += quantidade
  }
  
  visualizarSaldo() {
    alert("O seu saldo é de R$ " + this.saldo)
  }
}

class Pessoa extends Banco {
  constructor(nome, idade) {
    // Estou chamando o constructor da class Banco para ter acesso ao atributo "saldo"
    super()
    this.nome = nome
    this.idade = idade
  }
}

let opcao

function criarPessoa() {
  let nome = prompt("Qual seu nome?")
  let idade = prompt("Qual sua idade?")
  const pessoa = new Pessoa(nome, idade)
  
  return pessoa
}
// A função me retorna um objeto, logo a variável "pessoa" terá um objeto associado a ela
const pessoa = criarPessoa()

while(opcao != 4) {
  opcao = prompt("Bom dia!\nO que deseja fazer?\n1- Sacar\n2- Depositar\n3- Visualizar saldo\n4- Sair")
  if(opcao == 1) {
    let quantidadeString = prompt("Quanto deseja sacar?")
    let quantidadeNumber = parseInt(quantidadeString)
    pessoa.sacar(quantidadeNumber)
  } else if(opcao == 2) {
    let quantidadeString = prompt("Quanto deseja depositar?")
    let quantidadeNumber = parseInt(quantidadeString)
    pessoa.depositar(quantidadeNumber)
  } else if(opcao == 3) {
    pessoa.visualizarSaldo()
  } else if(opcao == 4){
    alert("Obrigado e volte sempre!")
  } else {
    alert("Essa opção não existe!")
  }
}

alert("Programa finalizado!")


*/
class Spaceship {
  constructor(name, maxCrew, maxRecommendedVelocity) {
      this.name = name
      this.maxCrew = maxCrew
      this.maxRecommendedVelocity = maxRecommendedVelocity
      this.currentVelocity = 0
  }

  speedUp(acceleration) {
      this.currentVelocity += acceleration
      if(this.currentVelocity > this.maxRecommendedVelocity) {
          alert("VELOCIDADE MÁXIMA ULTRAPASSADA!!\nDiminua ou poderá causar danos!")
      }
  }
}

class TransportSpaceship extends Spaceship {
  constructor(name, maxCrew, maxRecommendedVelocity, maxLoadWeight) {
      super(name, maxCrew, maxRecommendedVelocity)
      this.maxLoadWeight = maxLoadWeight
  }

  speedUp(acceleration) {
      acceleration /= 2
      alert("Incrementando velocidade em " + acceleration + "km/s")
      super.speedUp(acceleration)
  }
}

let transportSpaceship = new TransportSpaceship("Transportadora", 4, 100, 400)

console.log(TransportSpaceship)

TransportSpaceship.speedUp(210)