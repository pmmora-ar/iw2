import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopBarComponent } from './top-bar/top-bar.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
  ],
  declarations: [
    TopBarComponent,
    ContainerComponent,
    FooterComponent,
  ],
  exports: [
    TopBarComponent,
    ContainerComponent,
    FooterComponent
  ]
})
export class CoreModule { }