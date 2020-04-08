import { Component, OnInit, Input } from '@angular/core';
import { Fund } from '../../models/fund';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-compare-fund',
  templateUrl: './compare-fund.component.html',
  styleUrls: ['./compare-fund.component.scss']
})
export class CompareFundComponent implements OnInit {
  @Input() public fundDetails: Fund;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateCompare(){
    this.router.navigate(['/compare', this.fundDetails.id]);
  }

}
