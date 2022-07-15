function slowDown(velocity, printer) {
    let desacelerar=20
    while(velocity > 0){
        printer(velocity)
        velocity-=desacelerar
    }       
    
    alert('Nave Parada. Comportas podem ser abertas.')
}


slowDown(150, function(velocity){
    alert('Sua velocidade é ' + velocity)
})