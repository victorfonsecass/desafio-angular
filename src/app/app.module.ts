import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GithubServiceService } from './shared/github-service.service';
import { SharedModule } from './shared/shared.module';

import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [										
    AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    FontAwesomeModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule
  ],
  providers: [GithubServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
