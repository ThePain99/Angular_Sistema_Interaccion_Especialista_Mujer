export class User {
    nombre: string
    apellido: string
    dni: string
    correo: string
    contrasena: string
    estado: boolean
    tipo: boolean
    modalidadId: any

    constructor(name: string,
                lastName: string,
                dni: string,
                email: string,
                password: string,
                state: boolean,
                userType: boolean,
                modalityId: any) {
        this.nombre = name
        this.apellido = lastName
        this.dni = dni
        this.correo = email
        this.contrasena = password
        this.estado = state
        this.tipo = userType
        this.modalidadId = modalityId
    }
}