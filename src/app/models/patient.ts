export class Patient {
    nombre: string
    apellido: string
    dni: string
    correo: string
    numero: string

    constructor(name: string,
                lastName: string,
                dni: string,
                email: string,
                cellphone: string){
        this.nombre = name
        this.apellido = lastName
        this.dni = dni
        this.correo = email
        this.numero = cellphone
    }
}