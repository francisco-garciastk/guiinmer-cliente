import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';
import { LoginComponent } from './common/conteiners/login/login.component';
import { PageNotFoundComponent } from './common/conteiners/page-not-found/page-not-found.component';
import { InvestigacionComponent } from './proveedor/components/investigacion/investigacion.component';


const appRoutes: Routes = [
 /* {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'crisis-center',
    loadChildren: () => import('./crisis-center/crisis-center.module').then(mod => mod.CrisisCenterModule),
    data: { preload: true }
  },*/
  {
    path: 'proveedor',
    loadChildren: () => import('./proveedor/proveedor.module').then(mod => mod.ProveedorModule),
    data: { preload: false }
  },


<<<<<<< HEAD
  { path: 'investigacion' , component: InvestigacionComponent},
  { path: 'cotizacion' , component: CotizacionComponent},
=======
  { path: '',   component: LoginComponent, pathMatch: 'full' },  
>>>>>>> 2a361735584f5e11beab8dae485549e359069bb1
  { path: '**', component: PageNotFoundComponent }


];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategyService,
      }
    )
  ],
  declarations:[],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
