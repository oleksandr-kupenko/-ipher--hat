import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PublicWrapperComponent} from "./public-wrapper.component";
import {RouterModule} from "@angular/router";
import { PublicHeaderComponent } from './components/public-header/public-header.component';


@NgModule({
  declarations: [PublicWrapperComponent, PublicHeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [PublicWrapperComponent]
})
export class PublicWrapperModule { }
