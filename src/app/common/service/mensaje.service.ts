import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Mensaje } from '../models/mensaje';

import { DataService } from './data.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept':  'application/json',
      'Authorization': 'my-auth-token'
  })};
  

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  endPointURL = "/mensaje/webresources/mensaje";
  
  constructor(private http: HttpClient) { }

  getMessage( id: string ){
    return this.http.post<Mensaje>( this.endPointURL, id, httpOptions );
  }

}
