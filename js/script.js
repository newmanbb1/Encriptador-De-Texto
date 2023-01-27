const textArea = document.querySelector('.textArea');
const text = document.querySelector('.mensaje');
/**/ 

function btnEncriptar(){
  const textEncriptado = encriptar(textArea.value); 
  text.value=textEncriptado;
  textArea.value="";
  text.style.backgroundImage = "none";
}

function btnDesEncriptar(){
    const textEncriptado = DesEncriptar(textArea.value); 
    text.value=textEncriptado;
    textArea.value="";
    text.style.backgroundImage = "none";
  }

function btnCopiar(){
    text.select();
    document.execCommand("copy");
}


function encriptar(cadenaEcriptada){

    let vocalSustituta = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"],];
    cadenaEcriptada=cadenaEcriptada.toLowerCase();
    for (let i = 0; i < vocalSustituta.length; i++) {
        if(cadenaEcriptada.includes(vocalSustituta[i][0])){
        cadenaEcriptada=cadenaEcriptada.replaceAll(vocalSustituta[i][0],vocalSustituta[i][1]);
        }
    }
    return cadenaEcriptada;

    
}

function DesEncriptar(cadenaDescriptada){

    let vocalSustituta = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"],];
    cadenaDescriptada=cadenaDescriptada.toLowerCase();
    for (let i = 0; i < vocalSustituta.length; i++) {
        if(cadenaDescriptada.includes(vocalSustituta[i][1])){
            cadenaDescriptada=cadenaDescriptada.replaceAll(vocalSustituta[i][1],vocalSustituta[i][0]);
        }
    }
    return cadenaDescriptada;

}