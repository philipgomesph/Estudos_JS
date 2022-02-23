let num = [5,8,2,9,3];

console.log(`Nosso vetor é o ${num}`);

num.push(7);
num[3] = 6;
var a = num.length;
console.log(`Nosso vetor é o ${num}`);
console.log(`O tamanho do vetor é ${a}`);
console.log(`O primeiro elemento do vetor é ${num[0]}`);
num.sort();
console.log(`Nosso vetor ordenado é ${num}`);
console.log(`Agora o primeiro elemento do vetor é ${num[0]}`);

for(var i=0 ; i<= num.length;i++){
    console.log(`O valor do vetor na posição ${i} é ${num[i]}`);
}

console.log("-------------- NOVO For para JS  ---------------- \n");
for(i in num){
    console.log(`Os valores do vetor são: ${num[i]}`)
}

var index = num.indexOf(6);

if(index == -1){
    console.log(`Valor não encontrado no array`);
}else{
    console.log(`O index do valor informado é: ${index}`);
}