let distancia = prompt("Digite a distância em anos luz: ")
let choseOp =prompt("Escolha entre as opções de conversão: \nParsec \nUnidade Astronômica \nQuilômetros")

switch(choseOp){
    case "Parsec":
        let Parsec = distancia*0.306601
        alert("A distância em anos-luz "+ distancia+" convertida a Parsec é de: "+Parsec)
        break
    case "Unidade Astronômica":
        let ua = distancia*63241.1
        alert("A distância em anos-luz "+ distancia+" convertida a Unidade Astronômica é de: "+ua)
        break
    case "Quilômetros":
        let km= distancia * 9.5 * Math.pow(10, 12)
        alert("A distância em anos-luz "+ distancia+" convertida em Quilômetros é de: "+km)
        break
    default:
        alert("A distância em anos-luz: "+ distancia+" \nUnidade não identificada: Conversão fora do escopo.")
}