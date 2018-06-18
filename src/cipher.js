//SE DECLARAN LAS VARIABLES CON LAS QUE SE TRBAJARA


window.cipher = {
encode:(string, offset)=>{


let g = '';
let outText= '';
let numero = '';
let back ='';
let asigAlf = '';
//let offset = '';
let getAscii ='';
let asciiFormula = '';
let giveAscii = '';
let newAlf = '';
  //Se introduce el desplazamiento para colocarlo en la formula
      //offset = parseInt(document.getElementById('introKey').value) ;
  // Se crea una loop para asignar un índice a cada elemento de la cadena de texto
//const string = document.getElementById('ingresar').value ;
for (i=0 ; i<string.length ; i++) {
getAscii = string.charCodeAt(i);
console.log(getAscii);
  //Se asignan los intervalos para los diferentes caracteres de ASCII
if (getAscii === 32){
        let espace = String.fromCharCode(getAscii) ;
        back += espace ;
        console.log(back) ;
        continue ;
      } else if(getAscii >= 33 && getAscii <= 64){
        asigAlf = 33 ;
        console.log(asigAlf);
      } else if (getAscii >= 65 && getAscii <= 90){
        asigAlf = 65 ;
        console.log(asigAlf);
      } else if (getAscii >= 97 && getAscii <= 122){
        asigAlf = 97 ;
        console.log(asigAlf);
      }
    asciiFormula = (getAscii - asigAlf + offset)%26 + asigAlf ;
    let g = String.fromCharCode(asciiFormula);
console.log(g);
    back += g;
  console.log(back);
      }
    return back;
      },

decode:(string, offset) =>{

  let g = '';
  let outText= '';
  let numero = '';
  let back ='';
  let asigAlf = '';
  //let offset = '';
  let getAscii ='';
  let asciiFormula = '';
  let giveAscii = '';
  let newAlf = '';


//Se introduce el desplazamiento para colocarlo en la formula
         //offset = parseInt(document.getElementById('introKey').value) ;
         // Se crea una loop para asignar un índice a cada elemento de la cadena de texto
         //const string = document.getElementById('crip').value ;
         for (i=0 ; i < string.length ; i++) {
         deCipher = string.charCodeAt(i);
//Se asignan los intervalos para los diferentes caracteres de ASCII
         if (deCipher === 32){
               let espace = String.fromCharCode(deCipher) ;
               outText += espace ;
               continue;
         } else if(deCipher >= 33 && deCipher <= 64){
               asigAlf = 64 ;
         } else if (deCipher >= 65 && deCipher <= 90){
               asigAlf = 90 ;
         } else if (deCipher >= 97 && deCipher <= 122){
               asigAlf = 122 ;
         }
  // Se introducen las variable dentro de la formula para asignar un nuevo numero en ascii
    giveAscii = (((deCipher - asigAlf - offset)%26) + asigAlf) ;
    newAlf = String.fromCharCode(giveAscii) ;
    outText += newAlf ;
        }
    return outText;
        },
    createCipherWithOffset:() => {

        }
        };
