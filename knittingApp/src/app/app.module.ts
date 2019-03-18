import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KnittingDetailComponent } from './knitting-detail/knitting-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    KnittingDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
