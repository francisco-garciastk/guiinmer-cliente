import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../../../common/service/data.service';
import { AppState } from '../../../app.state';
import { PersonaService } from '../../../common/service/persona.service';
import { Persona } from '../../../common/models/persona.model';



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
    this.router.navigate(['/proveedor/investigacion'])
  }

  validarLogin( persona : Persona){
    this.appState.persona = {...persona};
    if( this.appState.persona.nombre !== null ){
      this.router.navigate(['/proveedor/home', {  }]);
    }
  }

}
