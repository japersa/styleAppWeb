//Number: Se utiliza para definir numero enteros o flotantes
//String: Se utiliza para definir una secuencia de caracteres
//Boolean: Se utiliza para definir si un valor es verdadero o falso
//Null: Se utiliza para que no tiene valor o es nulo
//Undefined: Non esta asignado o no esta identificado
//Object: Se utiliza para definir una coleccion de propiedades y atributos o metodos
//Symbol: Representa un  identificador inmutable

//var: Define una variable global y local en funcion del contexto o ambito
//let: Definir una variable de ambito de bloque
//const: Define una constante cuyo valor no cambia

// USO TIPOS DE DATOS
let name = "";
let age = 30;
let isMa = true;
let person = {
    firstName: "Alvaro",
    lastname: "Perez",
    fullName: function () {
        return this.firstName + " " + this.lastname;
    }
}

let person1 = {
    firstName: "Luisa",
    lastname: "Alvarez",
    fullName: function () {
        return this.firstName + " " + this.lastname;
    }
}

let persons = [
    person,
    person1
]

console.log(persons)