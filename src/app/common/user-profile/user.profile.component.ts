// TODO: Feature Componetized like CrisisCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Model } from "../../model";
import { DataService } from "../../data.service";


@Component({
  selector: 'app-user-profile',
  templateUrl: './user.profile.component.html'
})
export class UserProfileComponent implements OnInit {
  
  model : Model;

  constructor(private data: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(model => this.model = model)    
  }
  
}
