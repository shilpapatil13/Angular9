import { Component, OnInit, Input } from '@angular/core';
import { Fund } from '../../models/fund';

@Component({
  selector: 'app-fund-returns',
  templateUrl: './fund-returns.component.html',
  styleUrls: ['./fund-returns.component.scss']
})
export class FundReturnsComponent implements OnInit {
  @Input() public fundDetails: Fund;
  constructor() { }

  ngOnInit(): void {
  }

}
