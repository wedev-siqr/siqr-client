import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL_MODULES = [MatToolbarModule, MatButtonModule];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MATERIAL_MODULES],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
