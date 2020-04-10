import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReturnsFieldService {
    returnsFieldEventEmitter = new EventEmitter();
  constructor() { }

  returnsField(year : number){   
    this.returnsFieldEventEmitter.emit(year);      
  }
}
