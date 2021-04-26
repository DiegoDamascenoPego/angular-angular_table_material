import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe, DecimalPipe, PercentPipe } from '@angular/common';
import { TableComponent } from './table.component';
import { MaskPipe, NgxMaskModule } from 'ngx-mask';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ButtonModule } from '../button/button/button.module';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatTableModule,
    NgxMaskModule.forRoot(),
    MatPaginatorModule,
    CdkTableModule,
    ButtonModule,
    MatButtonModule,
    MatTooltipModule
  ],
  exports: [
    TableComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers:[DecimalPipe, CurrencyPipe, PercentPipe, MaskPipe, DatePipe]
})
export class TableModule { }
