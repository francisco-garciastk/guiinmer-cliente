import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';
import { Persona } from '../models/persona';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


import { DataService } from '../service/data.service';
import { AppState } from 'src/app/app.state';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept':  'application/json',
      'Authorization': 'my-auth-token'
  })};
  

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  endPointURL = "/personaFront-1.0/webresources/persona";
    
  appState : AppState;
  
  constructor(private http: HttpClient, private data: DataService) {     
    this.data.currentMessage.subscribe(appState => this.appState = appState)
  }
    

  getPersona( curp: string ){
    return this.http.post<Persona>( this.endPointURL, { curp: curp}, httpOptions )
    .pipe(
      catchError(error => this.handleError( error, this.data, this.appState ))
    );
  }
  
  private handleError(error: HttpErrorResponse, data: DataService, model : AppState) {
  
  console.log(this);  
  console.log(this.data);  
    
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    
    if( error.status === 406 ){
      model.mensaje = { mensaje : error.error.message, level:"danger", id:"0" };
      this.data.changeMessage( model );            
    }
    
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${JSON.stringify(error.error)}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
  };

}
