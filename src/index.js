//En la primera sección se obtiene el mensaje y se encripta.
let introKey = document.getElementById('introKey');
let ingresarTxt = document.getElementById('ingresar');
let msgCriptado = document.getElementById('msgCriptado');
let msgDecifrado= document.getElementById('msgDecifrado');
// Introducir offset(desplazamiento) para cifrar
const intdespl=()=>{
  offset = parseInt(document.getElementById('introKey').value);
  return offset;
 }
// Aquí se jala la cadena de texto que se desea cifrar.
  const  getText=()=>{
    const string = document.getElementById('ingresarTxt').value ;
    document.getElementById('msgCriptado').innerHTML = (cipher.encode(string,intdespl()));
  }

  // }
// En esta sección se introduce el mensaje encriptado y obtienes el mensaje
//decifrado.
// Se introduce offset para poder decifrar
/*const desplaza=()=>{
  offset = parseInt(document.getElementById('introKey').value) ;
  return offset;
}*/
 // Se introduce mensaje encripatdo
  const desenCryp=()=>{
  const string = document.getElementById('decifMsg').value ;
  document.getElementById('msgDecifrado').innerHTML = (cipher.decode(string, intdespl()));
}
