/**Modelo orientado a objetos
 * Clases
 * Constructores
 * Asignar Public a los atributos y metodos para que se pueda acceder de manera global
 * Asignar private a los atributos y meotods para que no puedan acceder fuera de su scope ( encapsulacion en Modelo orientado a objetos )
 * Metodo Get
 * Metodo Set
 * Atributos de solo lectura readonly
 */


//  Clase Principal Escuela Digital
export class EscuelaDigita {
    //  Atributos
    public nombre : string;
    private cursos: Course[] = []

    //  Parametros que espera recibir para funcionar
    constructor( nombre: string ){
        this.nombre = nombre;

    }

    public agregarCurso( curso : Course){
        this.cursos.push( curso )   //  Firma de la funcion que permite agregar un curso de tipo string a un []
    }

    public getCursos(){
        this.cursos.map( curso => {
            console.log( curso )
            return curso; 
        })
    }

};


//  02. Creamos una clase para Darle Propiedades a un Atributo en este caso a los Cursos
class Course {

    //  Constructor -> Parametros que espera recibir para funcionar
    constructor( private _nombre: string, private _id : number ){

    }

    get id() {
        //  Permite obtener el estado actual de ID
        return this._id
    }

    set id( id:number){
        //  Permite cambiar el estado de ID
        this._id = this.id
    }

    get nombre(){
        return this._nombre
    }

    set nombre(nombre : string){
        this._nombre = nombre
    }
}


const escuela = new EscuelaDigita('EDTeam')
let Javascript = new Course('JavaScript', 1)
let TypeScript = new Course('TypeScript', 2)
escuela.agregarCurso( Javascript )
escuela.agregarCurso( TypeScript )
console.log( escuela );


//  Metodo Get y Set
const VUEJS = new Course('Vue JS', 3)
VUEJS.id = 4
escuela.agregarCurso(VUEJS)
console.log(escuela) 
