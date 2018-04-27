import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Card } from '../models/Card';

import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Hand } from '../models/Hand';
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


  handUrl: string = "https://localhost:8443/getHand";

  constructor(private http: HttpClient) { }

  getHand(): Observable<Card[]>{
    return this.http.get<Card[]>(this.handUrl);
  }
}
