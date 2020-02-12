import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroProveedorComponent } from './conteiners/registro-proveedor/registro-proveedor.component';
import { CotizacionComponent } from './components/cotizacion/cotizacion.component';
import { InvestigacionComponent } from './components/investigacion/investigacion.component';
import { CuestionarioComponent } from './components/cuestionario/cuestionario.component';
import { ProveedorRoutingModule } from './proveedor-routing.module';
import { DetalleImComponent } from './conteiners/detalle-im/detalle-im.component';
import { EFirmaComponent } from './conteiners/e-firma/e-firma.component';
import { FormsModule } from '@angular/forms';


//Service
import { DetalleIMService } from './service/detalle-im.service';






@NgModule({
  imports: [
    CommonModule,
    ProveedorRoutingModule,
    FormsModule
  ],
  declarations: [
    RegistroProveedorComponent,
    CotizacionComponent,
    InvestigacionComponent,
    CuestionarioComponent,
    DetalleImComponent,
    EFirmaComponent],
    providers: [
      DetalleIMService
    ]
})
export class ProveedorModule { }