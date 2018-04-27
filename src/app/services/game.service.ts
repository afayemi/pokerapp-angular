import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Card } from '../models/Card';


@Injectable()
export class GameService {
    hand: Card[];
    data: Observable<any>;


    getHand = '/getHand';

    getHandValue = '/getHandValue';


    constructor(
        private http: HttpClient,
    ) {}


    gethand(): Observable<Card[]> {
      return this.http.get<Card[]>(this.getHand);
    }

    getHandValue(): Observable<string> {
      return this.http.get<string>(this.getHandValue);
    }


}
