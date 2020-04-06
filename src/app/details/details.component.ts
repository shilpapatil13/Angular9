import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FundService } from '../services/fund.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  fundId;
  fundname;
  constructor(private route: ActivatedRoute, private fundService: FundService, private router: Router) { }

  ngOnInit(): void {
    this.fundId = this.route.snapshot.params['id'];
    this.fundService.getFundsById(this.fundId).subscribe((data) => {
      this.fundname = data[0].name;
    });
  }
  navigateCompare()
  {
    this.router.navigate(['/compare', this.fundId]);
  }
}
