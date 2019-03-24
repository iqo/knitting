import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { KnittingDetailComponent } from './knitting-detail/knitting-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { PicturesComponent } from './pictures/pictures.component';
import { RootComponent } from './root/root.component';
import { InformationComponent } from './information/information.component';

@NgModule({
  declarations: [
    KnittingDetailComponent,
    MessagesComponent,
    PicturesComponent,
    RootComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
