import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { GameComponent} from './components/game/game.component';
import { CardComponent } from './components/cards/card.component';
import { HandComponent } from './components/hand/hand.component';
import { DeckComponent } from './components/deck/deck.component';
import { CardServiceService } from './services/card-service.service';
import { HandService } from './services/hand.service';
import { GameService } from './services/game.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HandComponent,
    DeckComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CardServiceService, HandService, GameService],
  bootstrap: [AppComponent, CardComponent, GameComponent]
})
export class AppModule { }
