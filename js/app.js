let x;
let ttexto;
let texto=document.getElementById('texto');
let copiar=document.getElementById('texto_encryp');
let button=document.getElementById('copiar');
let rtcelse=document.getElementById('rtc_else');
let rtcif=document.getElementById('rtc_if');

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function encriptarTexto(){
    x=texto.value.toString().toLowerCase();
    if(x!="") {
    ttexto=x.replace(/e/igm, 'enter')
    .replace(/i/igm, 'imes')
    .replace(/a/igm, 'ai')
    .replace(/o/igm, 'ober')
    .replace(/u/igm, 'ufat');
   document.getElementById("texto_encryp").innerHTML=ttexto;
   rtcelse.style.display="none";
   rtcif.style.display="inline";
   asignarTextoElemento('h1','');}else{
    asignarTextoElemento('h1','Favor de ingresar una oracion');
   }

}

function desencriptarTexto(){
    x=texto.value;
    ttexto=x.replace(/enter/igm, 'e')
    .replace(/imes/igm, 'i')
    .replace(/ai/igm, 'a')
    .replace(/ober/igm, 'o')
    .replace(/ufat/igm, 'u')
    document.getElementById("texto_encryp").innerHTML=ttexto;
}

function copiarTexto(){
    copiar.select();
    document.execCommand('copy');
    button.textContent="Copiado";
    document.querySelector('#texto').value='';
    
}