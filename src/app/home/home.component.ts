import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  downloadURL: string;
  constructor() { }

  ngOnInit() {
  }



  uploadFile(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files.length > 0) {
      const file = input.files[0];
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(`uploads/${file.name}`);
      fileRef.put(file).then((snapshot: any) => {
        fileRef.getDownloadURL().then((url: string) => {
          this.downloadURL = url;
        });
      });
    }
  }

}
