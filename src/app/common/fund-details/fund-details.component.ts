import { Component, OnInit, Input } from '@angular/core';
import { Fund } from '../../models/fund';

@Component({
  selector: 'app-fund-details',
  templateUrl: './fund-details.component.html',
  styleUrls: ['./fund-details.component.scss']
})
export class FundDetailsComponent implements OnInit {
@Input() public fundDetails: Fund;
  constructor() { }

  ngOnInit(): void {
  }

}
