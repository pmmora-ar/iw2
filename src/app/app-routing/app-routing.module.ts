import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PublicViewComponent } from '../public/public-view/public-view.component';
import { TermConditionsComponent } from '../public/term-conditions/term-conditions.component';
import { PrivacyComponent } from '../public/privacy/privacy.component';
import { AboutUsComponent } from '../public/about-us/about-us.component';
import { LoginSpaceComponent } from '../public/login-space/login-space.component';
import { DashboardComponent } from '../private/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'public', pathMatch: 'full' },

  {
    path: 'public',
    data: {
      pageKey: 'publicOut',
    },
    children: [
      {
        path: '',
        component: PublicViewComponent,
      },
      {
        path: '',
        outlet: 'accountSpace',
        component: LoginSpaceComponent,
      },
    ],
  },

  {
    path: 'terms',
    data: {
      pageKey: 'termsOut',
    },
    children: [
      {
        path: '',
        component: TermConditionsComponent,
      },
      {
        path: '',
        outlet: 'accountSpace',
        component: LoginSpaceComponent,
      },
    ],
  },

  {
    path: 'privacy',
    data: {
      pageKey: 'privacyOut',
    },
    children: [
      {
        path: '',
        component: PrivacyComponent,
      },
      {
        path: '',
        outlet: 'accountSpace',
        component: LoginSpaceComponent,
      },
    ],
  },

  {
    path: 'about',
    data: {
      pageKey: 'aboutOut',
    },
    children: [
      {
        path: '',
        component: AboutUsComponent,
      },
      {
        path: '',
        outlet: 'accountSpace',
        component: LoginSpaceComponent,
      },
    ],
  },

  {
    path: 'private',
    component: DashboardComponent,
    data: {
      pageKey: 'dashboard',
    },
  },

  { path: '**', component: PublicViewComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
