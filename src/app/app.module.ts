import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';
import { TableModule } from './components/shared/table/table.module';
import { ClienteModule } from './view/cliente/cliente.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    TableModule,
    ClienteModule

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
 ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
