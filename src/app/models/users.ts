export interface Users {
  id: number;
  name: string;
  lastName: string;
  dni: number;
  email: string;
  password: string;
  state: boolean;
  type: boolean;
  modality: number;
  consultCount: bigint;
}
