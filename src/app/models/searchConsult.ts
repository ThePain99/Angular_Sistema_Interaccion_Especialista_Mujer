import {Patients} from "./patients";

export interface SearchConsult {
  id: number;
  fechaReserva: string;
  descripcion: string;
  usuarioId: number;
  estadoConsultaId: number;
  paciente: {
    [key: string]: Patients
  };
  violencias: Array<string>;
  modalidadId: number;
}
