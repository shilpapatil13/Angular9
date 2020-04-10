import { Component, OnInit, Input } from '@angular/core';
import { Fund } from '../../models/fund';

@Component({
  selector: 'app-returns-field',
  templateUrl: './returns-field.component.html',
  styleUrls: ['./returns-field.component.scss']
})
export class ReturnsFieldComponent implements OnInit {
@Input() public fundDetails: Fund;
  isPositive: boolean = false;
  showReturns: string = "";
  constructor() { }

  ngOnInit(): void {
    this.returns(this.fundDetails.oneYear);
  }

  returns(inputReturns:string){
    this.isPositive = !inputReturns.startsWith("-");
    this.showReturns = inputReturns
  }

}
