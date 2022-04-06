/**Arreglos en Typescript 
 * Arreglos Genericos alt + 124 simbolo de pleca
 *  Tuplas
*/

let courses : string[] = ['Angular', 'React', 'Deno']

let nombres : Array<string>;
nombres = ['Kia', 'Black', 'Pug'];

let arreglo : Array<string | number | boolean > = [2, 3, "String", true, false ]

let info : [string, number, any] = ['Typescript', 1, 100]
//console.log( info );

//  Pushear un dato a un []
info.push('MongoDB')

let conjuction : Array<string|number> = ["100", "Cien", 100, 100.00]
console.log( conjuction[0])

//  01. Recorrer un Array []
for (let numero of conjuction){
    console.log(numero);
}

//  02. Recorrer un Array []
for (let numero of info){
    console.log(numero);
}