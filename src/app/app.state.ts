
import { Mensaje } from './common/models/mensaje';
import { Persona } from './common/models/persona.model';

export class AppState {
  persona: Persona = new Persona();
  name: string;
  error: string;
  mensaje: Mensaje;
}

