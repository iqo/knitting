import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KnittingDetailComponent } from './knitting-detail/knitting-detail.component';
import { PicturesComponent } from './pictures/pictures.component';
import { InformationComponent } from './information/information.component';

const routes: Routes = [  
{ path: 'detail/:id', component: KnittingDetailComponent },
{ path: 'about', component:  InformationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
