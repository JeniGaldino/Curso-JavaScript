function add(n1,n2){
    let addi= n1+n2
    return addi
}
function sub(n1,n2){
    let subt= n1-n2
    return subt
}
function mult(n1,n2){
    let multi= n1*n2
    return multi
}
function div(n1,n2){
    let divi= n1/n2
    return divi
}
function calculator(n1,n2, operator){//O operator tem a função de ser substituído quando chamarmos a função, substituindo pelas funções já estabelecidas(add,sub etc.)
    return operator(n1,n2)
}
console.log(calculator(2,2,add))