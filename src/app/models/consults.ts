export interface Consults {
  id: number;
  fechaReserva: string;
  descripcion: string;
  usuarioId: number;
  estadoConsultaId: number;
  pacienteId: number;
  violencias: Array<string>;
  modalidadId: number;
}
