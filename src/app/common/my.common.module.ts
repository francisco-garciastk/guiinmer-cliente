import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { UserProfileComponent }    from './user-profile/user.profile.component';
import { AlertasComponent } from './alertas/alertas.component';





@NgModule({
  imports: [ CommonModule
  ],
  exports:[
    AlertasComponent
  ],
  declarations: [
    //UserProfileComponent,
    AlertasComponent
  ]
})
export class MyCommonModule {}
