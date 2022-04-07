import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AppComponent } from './app.component';
import { MuroComponent } from './components/muro/muro.component';
import { MiperfilComponent } from './components/miperfil/miperfil.component';
import { RecuperarComponent } from './components/recuperar/recuperar.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'muro',
    component: MuroComponent
  },
  {
    path: 'miperfil',
    component: MiperfilComponent
  },
  {
    path: 'recuperar',
    component: RecuperarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
