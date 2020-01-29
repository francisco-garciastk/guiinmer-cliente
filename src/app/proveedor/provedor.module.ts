import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosRegistroComponent } from './datos-registro/datos-registro.component';
import { RegistroProveedorComponent } from './conteiners/registro-proveedor/registro-proveedor.component';



@NgModule({
  declarations: [DatosRegistroComponent, RegistroProveedorComponent],
  imports: [
    CommonModule
  ]
})
export class ProveedorModule { }
