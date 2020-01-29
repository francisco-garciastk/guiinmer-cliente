import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import { AppState } from 'src/app/app.state';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject<AppState>( new AppState());
  currentMessage = this.messageSource.asObservable();
  
  appState : AppState = new AppState();

  constructor() { }

  changeMessage(message: AppState) {
    this.messageSource.next(message)
  }
  
  getModel(): Observable<AppState> {
    return this.currentMessage;
  }

}
