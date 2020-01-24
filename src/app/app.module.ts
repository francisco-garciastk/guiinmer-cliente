import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Router } from '@angular/router';

import { DataService } from "./data.service";
import { AppComponent }            from './app.component';
import { LoginComponent }  from './common/login/login.component';
import { PageNotFoundComponent }   from './page-not-found/page-not-found.component';

import { AppRoutingModule }        from './app-routing.module';
import { MyCommonModule }              from './common/my.common.module';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MyCommonModule    
  ],
  declarations: [
    AppComponent,    
    LoginComponent,
    PageNotFoundComponent,
    
  ],
  bootstrap: [ AppComponent ]

})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
