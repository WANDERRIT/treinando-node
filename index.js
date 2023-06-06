//função = Ação/repetir um algoritimo sempre que necessário

//criando a função
//function <NomedaFunçao>
// let nome = "wander"
// function olaMundo(){
//     console.log("Bom dia!! " + nome)
// }

// //executando a função
// olaMundo();


// function olaMundo(nome ="Barbosa"){
//     console.log("Bom dia!! " + nome)
// }

//executando a função
// olaMundo("Wander");
// olaMundo("Riti");
// olaMundo();




                                                            //EXERCÍCIOS DO 9 AO 1

//9
function converterEmHoras(minutos) {

    console.log("Quantidade de minutos = " + minutos)

    let horas = minutos / 60;

    console.log("A conversão é = " + horas);

}
converterEmHoras(120);

//exercício 8
function tabuada(num = 1){
}


function tabuada(num){
     
    console.log("aqui é pra ser uma tabuada\n")
    for(let i=1; i<=10; i++){
        console.log(i * num)
    }

}
tabuada(8);


//7
for (let i = 1; i <= 20; i=i +2) {
    console.log(i);
    }

//6
for (let i = 1; i <= 20; i++) {
    console.log(i);
    }

//5
function podeDirigir(num){
    if(num >= 18){
        console.log("pode dirigir");
    } else {
        console.log("Não pode dirigir")
    }

}

podeDirigir(67);

// 4
function parametroNumericos(num, num2){
    let resultado = num * num2;
    console.log(resultado)
}

parametroNumericos(3, 3)

// //3
function saudacao(nome2 ="goku"){
console.log("oi, eu sou o" + nome2)
}
saudacao();

// //2 
let numeroA = 2
let numeroB = 2
let resultado = numeroA * numeroB



console.log(resultado)

// //1
let NomeCompleto = "Wander Riti Barbosa";

console.log(NomeCompleto)





