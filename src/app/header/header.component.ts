import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FundService } from '../services/fund.service';
import { Fund } from '../models/fund';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  myControl = new FormControl();
  fundsList: Fund[];
  filteredOptions: Observable<Fund[]>;

  constructor(private router:Router,  private fundService: FundService) { }

  ngOnInit() {
    this.getFunds();
  }

  displayFn(option: Fund): any {
    return option ? option.name : option;
  }

  getFunds(): void {
    this.fundService.getFunds()
      .subscribe((data) => {
        this.fundsList = data;
        this.filteredOptions = this.myControl.valueChanges
          .pipe(
            startWith(''),
            map(value => this._filter(value))
          );
      });
  }

  onFundSelection(option: any): void {
    this.router.navigate(['/details', option.id]);
  }

  private _filter(value: any): Fund[] {
    const filterValue = value;
    return this.fundsList.filter(option => option.name.toLowerCase().includes(filterValue));
  }

}
