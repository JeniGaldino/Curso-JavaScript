let shipName= prompt("Digite o nome da nave: ")
let velocity=0
let choseOp
    
    function menu(){
    choseOp= prompt("O que deseja fazer? \n1-Acelerar \n2-Desacelerar \n3-Status Atual \n4-Sair")
     }
     function speedUp(unit="Km/s"){
         velocity+=5
         alert("A velocidade atual é de: "+velocity+unit)  
     }
     function slowDown(unit="Km/s"){
         if(velocity>0){
             velocity-= 5
             alert("A velocidade atual é de: "+velocity+unit)
         } else{
            alert("Estamos parados, considere acelerar a nave!")
         }
     }
     function information(unit="Km/s"){
         alert("A nave "+shipName+" está em uma velocidade de: "+velocity+unit)
     }

while(choseOp!=4){
    menu()
    if(choseOp==1){
        speedUp()
    }
    else if(choseOp==2){
        slowDown()
    }
    else if(choseOp==3){
        information()
    }
    else if(choseOp==4){
        alert("Até mais piloto!")  
    }
    else{
        alert("Opção inválida, tente novamente")
    }
}
