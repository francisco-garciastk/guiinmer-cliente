import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Model } from "../../model";
import { Mensaje } from "../domain/mensaje";
import { DataService } from "../../data.service";
import { PersonaService } from "../../common/services/persona.service";
import { Persona } from "../../common/domain/persona";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model : Model;  
  constructor(
    private data: DataService,
    private router: Router,
    private personaService:PersonaService ) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(model => this.model = model)
  }
  
  login(){
    //this.personaService.getPersona( this.model.persona.curp ).subscribe((persona : Persona) => this.validarLogin(persona) );
    this.router.navigate(['/proveedor/home', {  }]);
  }
  
  validarLogin( persona : Persona){
    this.model.persona = {...persona};
    if( this.model.persona.nombre !== null ){
      this.router.navigate(['/proveedor/home', {  }]);
    }
  }

}
