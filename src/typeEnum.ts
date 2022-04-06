/**Tipo de datos enumerados */

enum Curso {

    JavaScript,
    TypeScript,
    Python

};


let course2 : Curso = Curso.JavaScript;
console.log( Curso[course2] );

enum Dia {

    lunes,
    martes,
    miercoles,
    jueves,
    viernes,
    sabado,
    domingo

}

const day = ( dia : string ) => {
    if ( dia === 'lunes'){
        return Dia[0]
    }
    else if ( dia === 'martes'){
        return Dia[1]
    }
    else if ( dia === 'miercoles'){
        return Dia[2]
    }
    else if ( dia === 'jueves'){
        return Dia[3]
    }
    else if ( dia === 'viernes'){
        return Dia[4]
    }
    else if ( dia === 'sabado'){
        return Dia[5]
    }

    else {
        return Dia[6]
    }
    
}

console.log(day('martes'))
console.log(day('miercoles'))
console.log(day('sabado'))
console.log(day('domingo'))