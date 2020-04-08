import { Component, OnInit, Input } from '@angular/core';
import { Fund } from '../../models/fund';

@Component({
  selector: 'app-pros-and-cons',
  templateUrl: './pros-and-cons.component.html',
  styleUrls: ['./pros-and-cons.component.scss']
})
export class ProsAndConsComponent implements OnInit {
  @Input() public fundDetails: Fund;
  constructor() { }

  ngOnInit(): void {
  }

}
