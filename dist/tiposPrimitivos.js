"use strict";
/*
 *  Tipos de Datos Primitivos
 *  Boolean
*/
//  Usamos Let cuando queremos defeinir una variable que puede cambiar con el tiempo
let isActive = true;
let susbcribed = false;
const discount = (curso) => {
    if (curso === 'TypeScript') {
        return true;
    }
    return false;
};
//console.log(`Tiene Descuento: ${discount('Angular')}`)
//  Number Type
let students = 100;
let course = 'React';
const getQuantity = (curso) => {
    if (curso === 'Angular') {
        return 100;
    }
    ;
    return 0;
};
//console.log( `Numero de estudiantes en el curso ${ course }: ${ getQuantity( course )}` );
//  Number Hexadecimal
let Hexadecimal = 0xf00d;
//console.log(`Hexadecimal: ${ Hexadecimal } `);
let binario = 0b1010;
//console.log( 'BINARIO: ',binario );
// String
let names = 'Katch';
let lastname = 'Vidal';
let complete_name = `Nombre completo: ${names} ${lastname}  `;
//console.log( complete_name )
//  Tipos Primitivos Especiales variables de undefined, null
/*
*   Tipo Any -> Escenario proyectos de javascript ya existente que puedan mudarse rapidamente a Typescript, libreria externa que no tenemos la certeza del retorno de datos
*   Tipo void -> Una funcion no retorna absolutamente nada
*   Tipo never -> Se utiliza en una funcion
*   Tipo Null or Undefined -> Valores indefinidos o nulos por lo general en Javascript se utiliza undefined
*/
let unknow = ' retorno de datos desconocidos ';
let empty;
const show = (curso) => {
    const message = curso ? `Bievenido al Curso: ${curso} ` : `Suscribte al Curso ${curso} `;
    console.log('Message', message);
    //  Void nos ayuda a hacer funciones sin un return explicito
};
//show('TypeScript');
let nunca;
const returnError = (error) => {
    throw new Error('Error TypeScript' + error);
    //  Nunca retorna un vlor, produce una accion 
};
//returnError('Valor Inesperado')
let variableNull = null;
let variableUndefined = undefined;
const retornonull = () => {
    return null; //  Firma de la funcion
};
const retorUndefined = () => {
    return undefined; //  Firma de la funcion
};
