
let data={
    velocity:0,
    acelerando: function(speedUp){
        this.velocity+=speedUp
    }
    }

function registro(){
    data.nome = prompt("Digite o nome da nave: ")
    data.type= prompt("Digite o tipo da nave")
    data.maxVel= Number(prompt("Qual a velocidade máxima?"))
}
    
function acelerar(){
    let newVel=Number(prompt("Quanto deseja acelerar?"))
    data.acelerando(newVel)
    if(data.velocity>data.maxVel){
        alert("Velocidade excedida, a nave será desacelerada")
        data.velocity=0
    }else{
        alert("A velocidade atual é de: "+data.velocity+"Km/s")
    }
}

function parar(){
    alert("Nave: "+data.nome+"\nTipo: "+data.type+"\n Velocidade atual: "+data.velocity+"Km/s")
}

function menu(){
   let choseOp
    do{
        choseOp= prompt("O que deseja fazer com a nave?\n1-Acelerar\n2-Parar")
        switch(choseOp){
            case "1":
            acelerar()
            break
            case "2":
            parar()
            break
            default:
            alert("Opção inválida, tente novamente!")
            menu()
            break
        }
    } while(choseOp!=2)
    
}
registro()
menu()