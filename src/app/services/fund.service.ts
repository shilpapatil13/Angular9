import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Fund } from '../models/fund';

const fundUrl: string = 'assets/data/funds.json';  // URL to json file or the cloud url

@Injectable({
  providedIn: 'root'
})
export class FundService {

  constructor(private http: HttpClient) { }

  getFunds(): Observable<Fund[]> {
    return this.http.get<Fund[]>(fundUrl)
  }

  getFundsById(id): Observable<Fund[]> { // Needs Change
    return this.http.get<Fund[]>(fundUrl)
      .pipe(
          map(data => data.filter(element => element.id === id))
      )
  }
}
