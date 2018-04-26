import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CardComponent } from './components/cards/card.component';
import { HandComponent } from './components/hand/hand.component';
import { DeckComponent } from './components/deck/deck.component';
import { GameComponent } from './components/game/game.component';
import { CardServiceService } from './services/card-service.service';
import { HandService } from './services/hand.service';
import { GameService } from './services/game.service';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HandComponent,
    DeckComponent,
    GameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CardServiceService, HandService, GameService],
  bootstrap: [AppComponent, CardComponent]
})
export class AppModule { }
