import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MunchkinComponent } from './munchkin/munchkin.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PlayerCardsComponent } from './munchkin/player-cards/player-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    MunchkinComponent,
    PlayerCardsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
