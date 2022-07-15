class App{
    constructor(){
        this.spaceship= null
    }
    iniciar(){
        this.register()
        let choseOp
        do{
            choseOp = this.showMenu1()
            this.redirect(choseOp)
        } while(choseOp != "3")
        this.printAndExit()
    }
    register(){
        let name = prompt("Olá piloto! Digite o nome da nave: ")
        let quantity = prompt("Digite a quantidade de tripúlantes: ")
        let type = this.question()
        if(type == "1"){
        let weapons = prompt("Quantas armas a nave tem disponível?")
        this.spaceship = new NewBattleSpaceship(name,quantity,weapons)
        } else{
        let sits = prompt("Quantos assentos estão disponíveis na nave?")
        this.spaceship = new NewTransportSpaceship(name,quantity, sits)
        }
    }
    question(){
        let choseOp
        /*Aqui no while estamos verificando se a resposta do usuário é diferente do que está no array, usando o includes para verificar se esse valor
        foi o passado pelo usuário dentro da var choseOp, caso seja diferente o laço é desfeito
        */
        while(!["1","2"].includes(choseOp)){
            choseOp = prompt("Sua nave é do tipo: \n1-Batalha\n2-Transporte")
        }
        return choseOp
    }
    showMenu1(){
        let menu1 = prompt("O que deseja fazer? \n1-Acelerar\n2-Trocar de nave\n3-Imprimir resultados")
        let choseOp = prompt(menu1)
        while(!["1","2", "3"].includes(choseOp)){
        choseOp = prompt(menu1)
        }
        return choseOp
}
    redirect(choseOp){
        switch(choseOp){
            case 1:
            this.accelerate()
            break
            case 2:
            this.register()
            break
            
            
        }
    }
    accelerate(){
        let acelerar = Number(prompt("Quanto deseja acelerar?"))
        this.spaceship.speedUp(acelerar)
    }
    exit(){
        let final = prompt("Nome da nave: " +this.spaceship.name+"\nTripulantes: "+this.spaceship.crewQuantity+"\nVelocidade atual: " +
        this.spaceship.currentVelocity)
        alert(final)
    }
}