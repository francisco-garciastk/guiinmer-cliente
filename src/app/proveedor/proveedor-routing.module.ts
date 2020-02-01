import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectivePreloadingStrategyService } from '../selective-preloading-strategy.service';
import { CuestionarioComponent } from './components/cuestionario/cuestionario.component';
import { InvestigacionComponent } from './components/investigacion/investigacion.component';
import { LoginComponent } from '../common/conteiners/login/login.component';



const proveedorRoutes: Routes = [
    { path: 'cuestionario', component: CuestionarioComponent },
    { path: 'investigacion',   component: InvestigacionComponent},
    { path: '',   component: InvestigacionComponent},

];

@NgModule({
  imports: [
    RouterModule.forChild(proveedorRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations:[],

})
export class ProveedorRoutingModule { }
