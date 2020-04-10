import { Component, OnInit, Input } from '@angular/core';
import { Fund } from '../../models/fund';
import {ReturnsFieldService} from '../../services/returns-field.service'
import { FileDetector } from 'protractor';

@Component({
  selector: 'app-returns-field',
  templateUrl: './returns-field.component.html',
  styleUrls: ['./returns-field.component.scss']
})
export class ReturnsFieldComponent implements OnInit {
@Input() public fundDetails: Fund;
  isPositive: boolean = false;
  lable: string = ""
  showReturns: string = "";
  constructor(private returnsFieldService:ReturnsFieldService) { }

  ngOnInit(): void {
    this.returns(1);
    this.returnsFieldService.returnsFieldEventEmitter.subscribe(data=>{
      this.returns(data);      
    });
  }

  returns(year: number){
    if(year == 1){
      let returns = this.fundDetails.oneYear
      this.isPositive = !returns.startsWith("-");
      this.showReturns = returns;
      this.lable = "1 Year Returns";    
    } else if(year == 3){
      let returns = this.fundDetails.threeYears
      this.isPositive = !returns.startsWith("-");
      this.showReturns = returns;
      this.lable = "3 Year Returns";    
    } else if(year == 5){
      let returns = this.fundDetails.fiveYears
      this.isPositive = !returns.startsWith("-");
      this.showReturns = returns;
      this.lable = "5 Year Returns";    
    }
  }

}
