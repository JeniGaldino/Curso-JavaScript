class Spaceship{
    constructor(name,crewQuantity){
        this.name= name
        this.crewQuantity= crewQuantity
        this.hitched= false
        this.gates= "Closed"
    }
    engate(){
      this.hitched= true
      this.gates= "Opened"
        
      }
    }

    let informationList= new Array()

    function hitch(){
      let name = prompt("Digite o nome da nave:")
      let crewQuantity= Number(prompt("Digite a quantidade de tripulantes:"))
      let register= new Spaceship(name,crewQuantity)
      alert("Nave e tripulantes cadastrados com sucesso!")
      return register
    }

    function print(){
      informationList.forEach((element,index)=>{
      alert("Nome: "+element.name+"\nQuantidade de tripulantes: "+element.crewQuantity+"\nSituação de engate: "+element.hitched+"\nSituação das portas: "+element.gates)
      })
    }
    function menu(){
      let choseOp
      while(choseOp!="3"){

     choseOp= prompt("O que deseja fazer?\n1-Cadastrar nave\n2-Consultar cadastros\n3-Sair")

      switch (choseOp) {
        case "1":
          let spaceshipAdd=hitch()
          spaceshipAdd.engate()
          informationList.push(spaceshipAdd)
          break;
        case "2":
          print()
          break;
        case "3":
          alert("Até mais, piloto!")
          break
        default:
          alert("Opção inválida, tente novamente!")
          menu()
          break;
      }
      }
    }
  menu()