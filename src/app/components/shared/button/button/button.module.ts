import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonGridDeleteComponent } from './button-grid-delete/button-grid-delete.component';
import { ButtonGridEditComponent } from './button-grid-edit/button-grid-edit.component';
import { ButtonGridConfirmComponent } from './button-grid-confirm/button-grid-confirm.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ButtonGridEditComponent,
    ButtonGridConfirmComponent,
    ButtonGridDeleteComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    ButtonGridEditComponent,
    ButtonGridConfirmComponent,
    ButtonGridDeleteComponent,
    MatButtonModule
  ]
})
export class ButtonModule { }
