import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DetalleIMService } from '../../service/detalle-im.service';
import { Investigacion } from 'src/app/common/models/investigacion';

@Component({
  selector: 'app-detalle-im',
  templateUrl: './detalle-im.component.html',
  styleUrls: ['./detalle-im.component.css']
})
export class DetalleImComponent implements OnInit {

  detIM: any = {};
  
  constructor(private router: Router,
              private actRoute: ActivatedRoute,
              private detalleService: DetalleIMService) {
  }

  ngOnInit() {
    this.actRoute.params.subscribe( params => {
      this.detIM = this.detalleService.getDetalleIM( params['id']);
      console.log(this.detIM);
    });
  }

  irEFirma() {
    this.router.navigate(['/proveedor/efirma']);
  }

}
