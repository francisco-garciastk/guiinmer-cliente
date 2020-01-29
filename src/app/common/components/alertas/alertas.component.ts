// TODO: Feature Componetized like CrisisCenter
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/app.state';
import { Mensaje } from '../../models/mensaje';
import { DataService } from '../../service/data.service';
import { MensajeService } from '../../service/mensaje.service';




@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html'
})
export class AlertasComponent implements OnInit {
  
  appState : AppState;
  
  @Input()
  mensaje : Mensaje;  

  constructor(private data: DataService, private route: ActivatedRoute, private mensajeService:MensajeService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(appState => this.appState = appState );
    //this.mensajeService.getMessage("MSG001").subscribe((mensaje : Mensaje) => this.mensaje = {...mensaje} );  
  }
  
}
