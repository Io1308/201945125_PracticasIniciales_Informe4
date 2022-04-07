import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';

import {AplicacionService} from './services/aplicacion.service';
import { MuroComponent } from './components/muro/muro.component';
import { MiperfilComponent } from './components/miperfil/miperfil.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RecuperarComponent } from './components/recuperar/recuperar.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SignupComponent,
    SigninComponent,
    MuroComponent,
    MiperfilComponent,
    PerfilComponent,
    RecuperarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AplicacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
