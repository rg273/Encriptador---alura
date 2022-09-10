let inputTexto = document.querySelector(".texto-traducir")
const mensaje = document.querySelector(".texto-traducido")
let titulo = document.querySelector(".titulo-Cuando-no-haytexto")
let parrafo = document.querySelector(".parrafo-Cuando-no-haytexto")
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"` 

function btnEncriptar(){
    const TextoEncriptado = encriptar(inputTexto.value)
    mensaje.value = TextoEncriptado;    
    mensaje.style.backgroundImage = "none";
    titulo.style.display = "none";
    parrafo.style.display = "none";
}

function btnDesencriptar(){
    const TextoDesencriptado = desencriptar(inputTexto.value)
    mensaje.value = TextoDesencriptado;
}
function btn_copy(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
}

function desencriptar(stringEncriptado){
    // let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"],["o", "ober"], ["u", "ufat"]]
    // string = string.toLowerCase();

    // for(let i = 0 ;i < string.length;i++){
    //     if(string.includes(matrizCodigo[i][1])){
    //         string = string.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
    //     }
    // }
    // return string;
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"],["o", "ober"], ["u", "ufat"]]
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }     
    }
    return stringEncriptado;
}
function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"],["o", "ober"], ["u", "ufat"]]
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }     
    }
    return stringEncriptado;
}