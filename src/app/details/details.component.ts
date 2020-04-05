import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FundService } from '../services/fund.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private fundService: FundService, private router: Router) { }

  ngOnInit(): void {
    const fundId = this.route.snapshot.params['id'];
    console.log('fund ID is -- > ', fundId);
  }

}
