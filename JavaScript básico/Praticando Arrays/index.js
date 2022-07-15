const navesEstacionadas = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwth", 15, false]
  ];

let maisTripulantes=navesEstacionadas.filter(function(elemento){
    if(elemento[1]>9){
    return elemento
}      
}).map(function(elemento){
    return elemento[0]
})


console.log(maisTripulantes)

let pendente=navesEstacionadas.findIndex(function(elemento){
    return elemento[2]==false+3
})

console.log(pendente)

let caixaAlta= navesEstacionadas.map(function(elemento){
    return elemento[0].toUpperCase()
})
console.log(caixaAlta)

alert("As naves com mais elementos são: "+maisTripulantes+" o número de plataformas pendentes: "+pendente+" as naves em caixa alta são: "+caixaAlta)