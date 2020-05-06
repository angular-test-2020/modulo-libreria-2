import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {View1Component} from '../view1/view1.component';
import {View2Component} from '../view2/view2.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {id: 'Liberia2'}},
  {path: 'view1', component: View1Component, data: {id: 'Liberia2'}},
  {path: 'view2', component: View2Component, data: {id: 'Liberia2'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

/*@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})*/
export class AppRoutingModule { }
