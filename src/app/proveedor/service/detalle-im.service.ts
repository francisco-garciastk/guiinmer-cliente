import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Investigacion } from 'src/app/common/models/investigacion';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept':  'application/json',
        'Authorization': 'my-auth-token'
    })};

@Injectable({
        providedIn: 'root'
      })
export class DetalleIMService {

    endPointURL = "/api-front-mercados/investigaciones/";

    constructor(private http: HttpClient) {
        console.log("servicio listo para usarse!!!");
    }

    getDetalleIM( id: number) {
        this.endPointURL.concat(id+"");
        return this.http.get<Investigacion>( this.endPointURL, httpOptions );
    }



}



