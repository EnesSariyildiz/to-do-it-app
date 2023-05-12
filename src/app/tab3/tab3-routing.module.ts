import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  }
];

@NgModule({
  imports: [BrowserModule, IonicModule.forRoot(), FormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class Tab3PageRoutingModule { }
