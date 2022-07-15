let pilotName= prompt ("Digite seu nome, piloto:")
var velocity=0
let chooseV= prompt("Qual velocidade deseja acelerar a nave?")
let check= confirm("Estamos indo para a velocidade " +chooseV+" km você confirma essa ação?")

if(check==false){
    let chooseV= prompt("Qual velocidade deseja acelerar a nave?")
} 
if(chooseV == 0){
    alert("A nave está parada, considere partir e aumentar a velocidade.")
} else if(chooseV < 40){
    alert("Você está devagar, podemos aumentar a velocidade.")
} else if(chooseV >=40 && chooseV < 80){
    alert("Parece uma boa velocidade para manter.")
} else if(chooseV >=80 && chooseV <100){
    alert("Velocidade alta. Considere diminuir.")
} else{
    alert("Velocidade perigosa. Controle automático forçado.")
    chooseV=50
}
alert(pilotName+" estamos com a velocidade de "+chooseV+" KM")