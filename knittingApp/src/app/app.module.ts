import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { KnittingDetailComponent } from './knitting-detail/knitting-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    KnittingDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [KnittingDetailComponent]
})
export class AppModule { }
