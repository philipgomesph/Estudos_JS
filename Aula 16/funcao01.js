function verifica(num){
    if(num ==0){
        return("n é possivel dividir por 0")
    }else if(num%2 == 0)
    {
        return ('par');
    }else{
        return ('impar');
    }
    
}


var numero =3;
var resp;

// resp = verifica(numero);
// console.log(resp);
console.log(verifica(223));

console.log("\n------------- FATORIAL com Recursividade!  ------------- \n");
function fatorial(n){
    if(n == 1){
        return 1;
    }else{
        return n*fatorial(n-1);
    }
}
console.log(fatorial(5));
