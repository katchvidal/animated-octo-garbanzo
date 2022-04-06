/**Alias para tipo de datos en TypeScript */

let curso : string = 'JavaScript';


/**Aserciones */

let est : { nombre : string, curso : string} = {
    nombre : "kia",
    curso : "Javascript"
}

console.log( "estudiante 01",est );


/**Aserciones Type */
type ESTUDIANTE = { nombre : string, curso : string };
est = <ESTUDIANTE>{};
est.curso = "Typescript"
est.nombre = "Kyocera"
console.log( " estudiante 2",est );

let estudiante3 = <ESTUDIANTE>{};
estudiante3.nombre = 'Katch Vidal'
estudiante3.curso = "Python"
console.log("estudiante 3", estudiante3);

