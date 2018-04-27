import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Card } from '../models/Card';

@Injectable()
export class HandService {

  hand: Card[];
  data: Observable<any>;


  private getHand = '/getHand';


  constructor(
      private http: HttpClient,
  ) {}


   getData(){
     this.data = new Observable(observer => {

     });
   }
}
