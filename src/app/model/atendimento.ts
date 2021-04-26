import { EntityBase } from "./entity-base";
import { StatusAtendimento } from "./status-atendimento.enum";

export interface Atendimento {
  cliente: EntityBase;
  animal: EntityBase;
  telefones: string;
  data: string;
  status: StatusAtendimento;
  observacao: string;
}
