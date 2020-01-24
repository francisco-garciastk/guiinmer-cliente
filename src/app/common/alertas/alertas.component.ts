// TODO: Feature Componetized like CrisisCenter
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Model } from "../../model";
import { DataService } from "../../data.service";
import { MensajeService } from "../services/mensaje.service";
import { Mensaje } from "../domain/mensaje";



@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html'
})
export class AlertasComponent implements OnInit {
  
  model : Model;
  
  @Input()
  mensaje : Mensaje;  

  constructor(private data: DataService, private route: ActivatedRoute, private mensajeService:MensajeService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(model => this.model = model );
    //this.mensajeService.getMessage("MSG001").subscribe((mensaje : Mensaje) => this.mensaje = {...mensaje} );  
  }
  
}
