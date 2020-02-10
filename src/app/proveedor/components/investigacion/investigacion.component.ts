import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/common/service/data.service';
import { Router } from '@angular/router';
import { Area }  from 'src/app/common/models/area'
import { Investigacion } from 'src/app/common/models/investigacion';



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

  investigaciones: Array<Investigacion> = [
    {id: 0, descripcion: 'Seleccione una opción', fechaApertura:'',fechaCierre:''},
    {id: 1, descripcion: 'Datos de la Investigacion de mercado 1', fechaApertura:'01/01/2020', fechaCierre:'31/01/2020'},
    {id: 2, descripcion: 'Datos de la Investigacion de mercado 2', fechaApertura:'01/01/2020', fechaCierre:'31/01/2020'},
    {id: 3, descripcion: 'Datos de la Investigacion de mercado 3', fechaApertura:'01/01/2020', fechaCierre:'31/01/2020'},
    {id: 4, descripcion: 'Datos de la Investigacion de mercado 4', fechaApertura:'01/01/2020', fechaCierre:'31/01/2020'},
    {id: 5, descripcion: 'Datos de la Investigacion de mercado 5', fechaApertura:'01/01/2020', fechaCierre:'31/01/2020'},
    {id: 6, descripcion: 'Datos de la Investigacion de mercado 6', fechaApertura:'01/01/2020', fechaCierre:'31/01/2020'},
    {id: 7, descripcion: 'Datos de la Investigacion de mercado 7', fechaApertura:'01/01/2020', fechaCierre:'31/01/2020'},
    {id: 8, descripcion: 'Datos de la Investigacion de mercado 8', fechaApertura:'01/01/2020', fechaCierre:'31/01/2020'},
    {id: 9, descripcion: 'Datos de la Investigacion de mercado 9', fechaApertura:'01/01/2020', fechaCierre:'31/01/2020'}
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
