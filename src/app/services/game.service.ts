import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Hand } from '../models/Hand';
import { Card } from '../models/Card';

@Injectable()
export class GameService {

  handUrl: string = "https://localhost:8443/getHand";

  constructor(private http: HttpClient) { }

  getHand(): Observable<Card[]>{
    return this.http.get<Card[]>(this.handUrl);
  }
}
