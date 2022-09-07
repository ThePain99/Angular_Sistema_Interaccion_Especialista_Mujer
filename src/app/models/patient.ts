export class Patient {
    nombre: string
    apellido: string
    dni: string
    correo: string
    numero: string
    usuarioId: number

    constructor(name: string,
                lastName: string,
                dni: string,
                email: string,
                cellphone: string,
                userId: number){
        this.nombre = name
        this.apellido = lastName
        this.dni = dni
        this.correo = email
        this.numero = cellphone
        this.usuarioId = userId
    }
}