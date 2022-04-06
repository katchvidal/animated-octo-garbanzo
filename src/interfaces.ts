/**Interfaces en Typescript */


//  1.  Identificamos como debe lucir una interface de curso parametros o propiedades que debe conteneder para satisfacer esta interfaz
interface ICurso {  //  Se recomienda llamar I de interface + Nombre de la interface

    nombre : string;
    identificador : number;

}

//  02. Asigamos la interface a una variable ( espacio en memoria )
let courseType : ICurso = {

    nombre: "Typescript",
    identificador : 1

};

//  03. Una vez asigando como debe lucir la variable siempre tendra autocompletado
courseType  = {

    nombre : "Javascript",
    identificador : 2

};


let course03 : ICurso = {

    nombre : "Angular",
    identificador : 3

}

//  Extenediendo las interfaces | Herencias de interfaces

interface CursoEDTeam extends ICurso {
    costo : number;

}

let primerCurso : CursoEDTeam = {
    nombre : "Vue JS",  //  Propiedad de ICurso
    identificador : 10, //  Propiedad de ICurso
    costo : 1000,       //  Propiedad de CursoEDTeam
}

console.log( primerCurso )