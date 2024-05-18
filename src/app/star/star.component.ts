import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() rating = 0;
  @Output() ratingClicked : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    console.log(this.rating);
  }

  click(){
    this.ratingClicked.emit(this.rating);
  }

}
