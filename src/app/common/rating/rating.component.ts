import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() public rating: number;
  public fillStars = [];
  public blankSrars = [];
  constructor() { }

  ngOnInit(): void {
    this.ratingCalculation(this.rating);
  }

ratingCalculation(inputRating: number){
  let fillStar : number = 0;
  let blankSrar: number = 0;  
  if(inputRating > 0 && inputRating <=5){
    fillStar = inputRating;
     let temp = 5-inputRating 
    if(temp > 0){
      blankSrar = temp;
    }    
  }  
  for (var i = 1; i <= fillStar; i++) {
    this.fillStars.push(i);
  }
  for (var i = 1; i <= blankSrar; i++) {
    this.blankSrars.push(i);
  }
}
}
