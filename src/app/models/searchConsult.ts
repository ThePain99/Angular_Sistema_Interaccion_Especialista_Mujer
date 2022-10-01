import {Patients} from "./patients";
import {Modality} from "./modality";
import {StateConsult} from "./stateConsult";

export interface SearchConsult {
  id: number;
  fechaReserva: string;
  descripcion: string;
  usuarioId: number;
  estadoConsulta: {
    [key: string]: StateConsult
  };
  paciente: {
    [key: string]: Patients
  };
  violencias: Array<string>;
  modalidad: {
    [key: string]: Modality
  };
}
