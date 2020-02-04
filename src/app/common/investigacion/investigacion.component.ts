import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-investigacion',
  templateUrl: './investigacion.component.html',
  styleUrls: ['./investigacion.component.css']
})
export class InvestigacionComponent implements OnInit {

  constructor(
      private router: Router,
  ) { }

  ngOnInit() {
  }

  cotizacion(){
      this.router.navigate(['/cotizacion'])
  }

}
