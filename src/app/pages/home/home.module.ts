import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CoreModule} from "../../core/core.module";
import {HomeComponent} from "./home.component";
import {FooterComponent} from '../../core/footer/footer.component';
import {RightbarComponent} from '../../core/rightbar/rightbar.component';
import {LeftbarComponent} from '../../core/leftbar/leftbar.component';
import { ResizableModule } from 'angular-resizable-element';

const routes: Routes = [
  { path: '', component: HomeComponent }
]

@NgModule({
  declarations: [HomeComponent, FooterComponent, RightbarComponent, LeftbarComponent],
  imports: [
    ResizableModule,
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes)
  ],
  bootstrap: [
    FooterComponent,
    RightbarComponent,
    LeftbarComponent
  ]
})
export class HomeModule { }
