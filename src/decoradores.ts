/**Habilitar experimental Decorator para poder usar decoradores */

//  Decoradores
function Entidad(config : any ){
    console.log( config )
    return function ( target : any ){
        target.clave = config.clave
        console.log('Entidad', target);

    }
    
}


@Entidad( {
    clave : 'Curso'
} )
class Course{

    constructor( private _id:number, private _nombre : string ){

    }


    get id(){
        return this._id
    }

    set id( id : number ){
        this._id = id;
    }

    get nombre(){
        return this._nombre
    }

    set nombre( nombre : string ){
        this._nombre = nombre;
    }

}

let Flask = new Course(1, 'Flask')