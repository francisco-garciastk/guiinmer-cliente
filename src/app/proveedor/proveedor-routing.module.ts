import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectivePreloadingStrategyService } from '../selective-preloading-strategy.service';
import { CuestionarioComponent } from './components/cuestionario/cuestionario.component';
import { InvestigacionComponent } from './components/investigacion/investigacion.component';
import { LoginComponent } from '../common/conteiners/login/login.component';
import { DetalleImComponent } from './conteiners/detalle-im/detalle-im.component';
import { EFirmaComponent } from './conteiners/e-firma/e-firma.component';



const proveedorRoutes: Routes = [
    { path: 'cuestionario', component: CuestionarioComponent },
    { path: 'investigacion',   component: InvestigacionComponent},
    { path: 'detalle/:id',   component: DetalleImComponent},
    { path: 'efirma',   component: EFirmaComponent},
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
