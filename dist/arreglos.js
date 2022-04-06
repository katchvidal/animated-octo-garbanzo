"use strict";
/**Arreglos en Typescript
 * Arreglos Genericos alt + 124 simbolo de pleca
 *  Tuplas
*/
let courses = ['Angular', 'React', 'Deno'];
let nombres;
nombres = ['Kia', 'Black', 'Pug'];
let arreglo = [2, 3, "String", true, false];
let info = ['Typescript', 1, 100];
//console.log( info );
//  Pushear un dato a un []
info.push('MongoDB');
let conjuction = ["100", "Cien", 100, 100.00];
console.log(conjuction[0]);
//  01. Recorrer un Array []
for (let numero of conjuction) {
    console.log(numero);
}
//  02. Recorrer un Array []
for (let numero of info) {
    console.log(numero);
}
