import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { HandComponent } from '../hand/hand.component';

import { Hand } from '../../models/Hand';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getHand().subscribe(hand => {
      console.log(hand);
    })
  }


}
