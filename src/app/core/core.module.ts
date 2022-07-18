

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

import { ResultadoComponent } from './resultado/resultado.component';
import { SharedModule } from '../shared/shared.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EncontrarUsuarioComponent } from './encontrar-usuario/encontrar-usuario.component';

import { HomeCoreComponent } from './home/home-core.component';




@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    RouterModule,
    FormsModule
    
  ],
  declarations: [
    CoreComponent,
    NaoEncontradoComponent,
    ResultadoComponent,
    EncontrarUsuarioComponent,
    HomeCoreComponent
]
})
export class CoreModule { }
