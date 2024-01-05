import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntradasRoutingModule } from './entradas-routing.module';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';



@NgModule({
  declarations: [
    FormularioComponent,
  
  ],
  imports: [
    CommonModule,
    EntradasRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    
  ]
})
export class EntradasModule { }
