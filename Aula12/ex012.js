var hora = new Date().getHours();
var min = new Date().getMinutes();
var sec = new Date().getSeconds();

var agora = hora;
var agoraS = String(hora)+String(':'+ min+':'+sec);
console.log(`Agora são exatamente ${agoraS} horas`);
if(agora<12){
    console.log("Bom dia ");
}else if(agora<=18){
    console.log("Boa tarde");
}else{
    console.log("Boa Noite");
}