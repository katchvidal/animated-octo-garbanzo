"use strict";
/**Funciones usando tipo de datos primitivos
 * Parametros opcionales atributo? -> Signo de interrogacion implica en javascript que es opcional
*/
const salute = (name) => {
    if (!name) {
        return 'Hola: Unknow';
    }
    return `Hola ${name} `;
};
console.log(salute('Kyocera'));
console.log(salute());
