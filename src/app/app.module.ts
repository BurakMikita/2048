import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { GameModule } from './modules/game/game.module';
import { GameComponent } from './modules/game/components/game/game.component';



@NgModule({
  declarations: [
    AppComponent,

   

  
 
    
     
  ],

  
  imports: [
    
   GameModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NoopAnimationsModule,
    MatSlideToggleModule,
    MatCardModule, 
    MatButtonModule,
    MatInputModule,
    MatSelectModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
