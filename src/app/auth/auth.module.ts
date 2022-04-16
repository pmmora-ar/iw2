import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Firebase services + environment module

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
//import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from './environment';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';

// Auth service
//import { AuthService } from "./auth.service";

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    //AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
  ],
  declarations: [],
  //providers: [ AuthService ],
  exports: [  ]
})
export class AuthModule { }