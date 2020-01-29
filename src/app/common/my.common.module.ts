import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';


import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { AlertasComponent } from './components/alertas/alertas.component';
import { UserProfileComponent } from './components/user-profile/user.profile.component';


@NgModule({
  imports: [ CommonModule
  ],
  exports:[
    AlertasComponent,
    UserProfileComponent
  ],
  declarations: [
    UserProfileComponent,
    AlertasComponent,
    CotizacionComponent,

  ]
})
export class MyCommonModule {}
