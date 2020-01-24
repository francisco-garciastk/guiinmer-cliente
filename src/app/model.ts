import { Persona } from './common/persona';
import { Mensaje } from './common/domain/mensaje';

export class Model {
  persona: Persona = new Persona();
  name: string;
  error: string;
  mensaje: Mensaje;
}

