import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() rating = 0;
  @Output() ratingClicked : EventEmitter<any> = new EventEmitter<any>();

  stars = [];

  constructor() { }

  ngOnInit() {
    this.rating = Math.floor(this.rating);
    for (let index = 0; index < this.rating; index++) {
      this.stars.push(index);    
    }
  }

  click(){
    this.ratingClicked.emit(this.rating);
  }

}
