// TODO: Feature Componetized like CrisisCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/app.state';
import { DataService } from '../../service/data.service';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user.profile.component.html'
})
export class UserProfileComponent implements OnInit {
  
  appState : AppState;

  constructor(private data: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(appState => this.appState = appState)    
  }
  
}
