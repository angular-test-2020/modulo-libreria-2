import { NgModule } from '@angular/core';
import { PruebaConceptoLibreriaDosComponent } from './prueba-concepto-libreria-dos.component';
import { HomeComponent } from './home/home.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';



@NgModule({
  declarations: [PruebaConceptoLibreriaDosComponent, HomeComponent, View1Component, View2Component],
  imports: [
  ],
  exports: [PruebaConceptoLibreriaDosComponent, HomeComponent, View1Component, View2Component]
})
export class PruebaConceptoLibreriaDosModule { }
