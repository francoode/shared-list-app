import {BrowserModule} from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AllListComponent } from './list/all-list/all-list.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {AppReducers, effectsArr} from './ngrx/app.redux';

import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { LoginComponent } from './login/login.component';
import {AngularFireAuthModule} from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AllListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    StoreModule.forRoot(AppReducers),
    EffectsModule.forRoot(effectsArr),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
