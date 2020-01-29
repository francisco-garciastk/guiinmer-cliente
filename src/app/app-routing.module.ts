import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }  from './common/login/login.component';
import { PageNotFoundComponent }    from './page-not-found/page-not-found.component';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';
import { CuestionarioComponent } from './proveedor/components/cuestionario/cuestionario.component';

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
  },
  {
    path: 'home-provedor',
    loadChildren: () => import('./proveedor/proveedor.module').then(mod => mod.PensionadoModule),
    data: { preload: true }
  },*/
  { path: '',   component: LoginComponent, pathMatch: 'full' },
  { path: '**', component: CuestionarioComponent }
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
