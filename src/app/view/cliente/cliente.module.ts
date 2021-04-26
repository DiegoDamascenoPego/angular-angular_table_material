import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteFormComponent } from '../cliente-form/cliente-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { TableModule } from 'src/app/components/shared/table/table.module';



@NgModule({
  declarations: [
    ClienteFormComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    TableModule
  ],
  exports: [
    ClienteFormComponent
  ]
})
export class ClienteModule { }
