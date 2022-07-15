class Ninja{
    constructor(ninjaName){
        this.ninjaName = ninjaName = prompt("Qual o seu nome, ninja?")
        this.chakra = 100
    
    }

    fire(){
        if(this.chakra > 0){
            console.log("Estilo fogo: Jutsu bola de fogo!")
            this.chakra -= 25
        }else{
            throw new Error("Você está sem chakra")
        }
        
    }
    clone(){
        if(this.chakra > 0){
            console.log("Jutsu multiclone das sombras!")
            this.chakra -= 30
        }else{
            throw new Error("Você está sem chakra")
        }
    }
    
    lamen(){
        if(this.chakra < 100){
        console.log("O lamen do Ichiraku está carregando seu chakra em 50, aproveite!")
        this.chakra += 50
    }else{
      menu
    }
     
        
    }
    

    

}

let newNinja = new Ninja()
newNinja.fire()
console.log(newNinja)

try{
    newNinja.fire()
    newNinja.clone()
    newNinja.clone()
    newNinja.clone()
    console.log(newNinja)
  
}catch(e){
    console.log(e.message)
    newNinja.lamen()
}
