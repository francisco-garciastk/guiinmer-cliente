import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/common/service/data.service';
import { Router } from '@angular/router';
import { Area } from 'src/app/common/models/area'


@Component({
  selector: 'app-investigacion',
  templateUrl: './investigacion.component.html',
  styleUrls: ['./investigacion.component.css']
})
export class InvestigacionComponent implements OnInit {

  // areas : Area[];
  areas: Array<Area> = [
    {id: 0, descripcion: 'Seleccione una opción'},
    {id: 1, descripcion: 'Bienes'},
    {id: 2, descripcion: 'Servicios'},
    {id: 3, descripcion: 'Obras'},
    {id: 4, descripcion: 'Servicios por obra'},
];

  constructor(
    private data: DataService,
    private router: Router){
    }

  ngOnInit() {

  }

  navegarCuestionario(){
    this.router.navigate(['/proveedor/detalle']);
  }
}
