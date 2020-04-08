import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss']
})
export class InvestmentComponent implements OnInit {
public investmentAmount: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  addInvestmentAmount(amount: number){
    this.investmentAmount = this.investmentAmount + amount
  }

}
