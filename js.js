var numeros = [1, 2, 3, 4, 5];
for (var i = 0; i < numeros.length; i++) {
    if (numeros[i]) {

    }

}

let honda = [
{nome: "civic",
modelo: "sedan",
placa: 88888888
},
{nome:"city",
modelo:"sedan",
placa: 99999999
},
{nome: "HR-V",
modelo: "grande",
placa: 77777777
}
]

// for(let i = 0; i < honda.length; i++){
//     if(honda[i].placa){
//         console.log(honda[i].nome)

//     }
// }


function carros(placa){
    for(let i = 0; i < honda.length; i++){
        if(honda[i].nome.includes(placa)){
            console.log(honda[i].placa)
            console.log(honda[i].modelo)
    
        }
    }
}

carros("HR-V");