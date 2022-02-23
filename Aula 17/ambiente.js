let amigo = {};
amigo ={nome: 'PH', idade:27, sexo:'M'}

// console.log(amigo);

// console.log(amigo.nome);




let vetor= [amigo];
let i=0;


function adiciona(amigo)
{
    let t;
    t= amigo.idade;
    console.log(t);
    amigo.idade++;
    t= amigo.idade;
    console.log(t);
    return amigo;
}

// console.log(vetor);
vetor.push(adiciona(amigo)) ;
console.log(vetor);