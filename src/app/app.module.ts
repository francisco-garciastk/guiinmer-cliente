import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { AppComponent }            from './app.component';
import { AppRoutingModule }        from './app-routing.module';
import { MyCommonModule }              from './common/my.common.module';
import { ProveedorModule } from './proveedor/provedor.module';
import { LoginComponent } from './common/conteiners/login/login.component';
import { PageNotFoundComponent } from './common/conteiners/page-not-found/page-not-found.component';


//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CuestionarioComponent } from './proveedor/components/cuestionario/cuestionario.component';
import { InvestigacionComponent } from './common/investigacion/investigacion.component';

 //import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MyCommonModule,
    ProveedorModule    
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    CuestionarioComponent,
    
    
    InvestigacionComponent,
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
