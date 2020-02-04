import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/common/service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-investigacion',
  templateUrl: './investigacion.component.html',
  styleUrls: ['./investigacion.component.css']
})
export class InvestigacionComponent implements OnInit {

  constructor(
    private data: DataService,
    private router: Router){
      
    }

  ngOnInit() {
  }

  navegarCuestionario(){
    this.router.navigate(['/proveedor/cuestionario'])
  }
}
