function sumarUnoPromesa(numero){
    console.log(numero);
    var promesa = new Promise(function(resolve, reject){
        if(numero>=7){
            reject('Numero muy grande')
            return;
        }
        setTimeout(() => {
            resolve(numero + 1)
        }, 2000);
    });
    return promesa;
}

/*sumarUnoPromesa(5).then(function(nuevoValor){
    console.log(nuevoValor);
    sumarUnoPromesa(nuevoValor).then(function(nuevoValor){
        console.log(nuevoValor);
        sumarUnoPromesa(nuevoValor).then(function(nuevoValor){
            console.log(nuevoValor);
    })
    })
});*/

sumarUnoPromesa(5)
.then(nuevoValor => {
    return sumarUnoPromesa(nuevoValor);
})
.then(nuevoValor =>  sumarUnoPromesa(nuevoValor))
.then(sumarUnoPromesa)
.catch(err => {
    console.log(err);
})
