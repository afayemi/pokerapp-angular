import { Component } from '@angular/core';

import { Card } from '../../app/models/Card';

@Component({
  selector: 'card-app',
  templateUrl: './card.component.html'
})

export class CardComponent {

card: Card;

constructor(){
  this.card = {
    suit: 'H',
    value: 10
  }
}

}
