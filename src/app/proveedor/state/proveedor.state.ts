import { Persona } from 'src/app/common/models/persona.model';
import { Mensaje } from 'src/app/common/models/mensaje';


export class ProveedorState {
  persona: Persona = new Persona();
  name: string;
  error: string;
  mensaje: Mensaje;
}

