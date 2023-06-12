let listaArtistas = [{
    nome: "Maria Rita",
    estiloMusical: "MPB",
    diasDisponiveis: ["sábado", "domingo"]
    }, 
    {nome: "Emicida",
    estiloMusical: "Rap",
    diasDisponiveis: ["sexta-feira", "sábado"]
    },
    {nome: "Liniker",
    estiloMusical: "Soul",
    diasDisponiveis: ["quinta-feira", "domingo"]
    },
    {nome: "Duda Beat",
    estiloMusical: "Pop",
    diasDisponiveis: ["quarta-feira", "sexta-feira"]
    }];

    

    // let Emicida = listaArtistas

    // console.log(listaArtistas[1])
    // console.log(Emicida.nome)
    // console.log(Emicida)



function cadastrarArtista(nome, estiloMusical , diasDisponiveis){
console.log(nome, estiloMusical, diasDisponiveis)
}

// cadastrarArtista("nome", "pop", ["sábado", "domingo!"])

// let listaArtistas  = ["Halsey", "pop", ["sábado", "domingo"]];
// console.log(listaArtistas);


function  artistasDisponiveis(diaSemana){

    
    // for (var i = 0; i < listaArtistas.length; i++) {
    //     var artista = listaArtistas[i];
    //     if (artista.diasDisponiveis.includes(diaSemana)) {
    //       console.log("Artista: " + artista.nome);
    //       console.log("Estilo Musical: " + artista.estiloMusical);
    //       console.log("----------------------");
    //     }
    //   }

    for (let i = 0; i < listaArtistas.length; i++) {
        if(listaArtistas[i].diasDisponiveis.includes(diaSemana)){
            console.log(listaArtistas[i].nome)
            console.log(listaArtistas[i].estiloMusical)

        }
    }
}
    artistasDisponiveis("sexta-feira")
