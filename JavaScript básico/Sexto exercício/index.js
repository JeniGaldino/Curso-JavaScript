let nave= prompt("Digite o nome da nave: ")
let naveInvert=""

for(let i=nave.length -1; i>= 0;i--){
    naveInvert+=nave[i]
   if(nave[i]=="e"){
    break
   }
}
alert("O nome da nave era "+nave+" e se tornou "+naveInvert)