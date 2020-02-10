import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-im',
  templateUrl: './detalle-im.component.html',
  styleUrls: ['./detalle-im.component.css']
})
export class DetalleImComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irEFirma() {
    this.router.navigate(['/proveedor/efirma']);
  }

}
