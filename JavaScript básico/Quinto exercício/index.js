let nave= prompt("Qual o nome da nave?")
let Nnave=""
let q1= prompt("Qual caractere deseja substituir?")
let q2= prompt("Por qual caractere deseja substituir?")

for(let i=0; i < nave.length; i++){
if(nave[i] == q1){
    Nnave += q2
}else{
    Nnave+=nave[i]
}
}
alert("A nave "+nave+" se transformou em: "+Nnave)
 