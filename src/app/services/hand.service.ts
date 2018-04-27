import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';

import { Card } from  '../models/Card';

@Injectable()
export class HandService {

  hand: Card[];
  data: Observable<any>;

  constructor() {
    this.hand = [
      {
      suit: 'H',
      value: 10
    },
    {
      suit: 'H',
      value: 9
    },
    {
      suit: 'H',
      value: 8
    },
    {
      suit: 'H',
      value: 7
    },
    {
      suit: 'H',
      value: 6
    }
  ];
   }

   getData(){
     this.data = new Observable(observer => {

     });
   }

   

   gethand(): Observable<Card[]>{

     return of(this.hand);
   }

}
