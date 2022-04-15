import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing/app-routing.module';

import { PublicViewComponent } from './public-view/public-view.component';
import { LoginSpaceComponent } from './login-space/login-space.component';
import { LoginComponent } from './login/login.component';
import { TermConditionsComponent } from './term-conditions/term-conditions.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    PublicViewComponent,
    LoginSpaceComponent,
    LoginComponent,
    TermConditionsComponent,
    PrivacyComponent,
    AboutUsComponent,
  ],
  exports: [],
})
export class PublicModule {}
