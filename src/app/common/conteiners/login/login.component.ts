import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../../service/data.service';
import { AppState } from 'src/app/app.state';
import { PersonaService } from '../../service/persona.service';
import { Persona } from '../../models/persona.model';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  appState : AppState;  
  constructor(
    private data: DataService,
    private router: Router,
    private personaService:PersonaService ) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(appState => this.appState = appState)
  }
  
  login(){
    //this.personaService.getPersona( this.model.persona.curp ).subscribe((persona : Persona) => this.validarLogin(persona) );
    this.router.navigate(['/proveedor/home', {  }]);
  }
  
  validarLogin( persona : Persona){
    this.appState.persona = {...persona};
    if( this.appState.persona.nombre !== null ){
      this.router.navigate(['/proveedor/home', {  }]);
    }
  }

}
