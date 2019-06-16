import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/app/core/services/api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TowersComponent } from './Towers/Towers.component';
import { FormsModule } from '@angular/forms';

@NgModule({
   declarations: [
      AppComponent,
      TowersComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [
      ApiService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
