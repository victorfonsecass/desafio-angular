import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreComponent } from './core/core.component';
import { HomeCoreComponent } from './core/home/home-core.component';
import { NaoEncontradoComponent } from './core/nao-encontrado/nao-encontrado.component';
import { ResultadoComponent } from './core/resultado/resultado.component';


const routes: Routes = [
  { path: '', component: HomeCoreComponent},
  { path: ':username', component: CoreComponent,  
    children: [
      { path: '', component: ResultadoComponent},
      { path: 'nao-encontrado', component: NaoEncontradoComponent}, 
    ]
  },
  { path:'**', pathMatch: 'full', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



