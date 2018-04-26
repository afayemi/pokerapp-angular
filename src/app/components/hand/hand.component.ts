import { Component, OnInit } from '@angular/core';

import { Card } from '../../models/Card';

import { HandService } from '../../services/hand.service';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnInit {

  hand: Card[];
  showExtended: boolean = true;
  data: any;

  constructor(private handService: HandService) {
   }

  ngOnInit() {

    this.handService.getData().subscribe(data => {
      console.log(data);
    });

    this.handService.gethand();
  }

  drawHand(): Card[] {


    return this.hand;
  }

}
