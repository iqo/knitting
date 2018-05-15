import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

// import 'rxjs/add/operator/map';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  // Link to our api, pointing to localhost
  API = 'http://localhost:3000';

  // Declare empty list of people
  picture: any[] = [];

  constructor(private http: Http) {}

  // Angular 2 Life Cycle event when component has been initialized
  ngOnInit() {
    this.getAllPeople();
  }

  // Add one person to the API
  addPerson(pictureName, pictureDescription) {
    this.http.post(`${this.API}/pictures`, {pictureName, pictureDescription})
      .pipe(map(res => res.json()))
      .subscribe(() => {
        this.getAllPeople();
      }, error => console.log(error))
  }

  // Get all users from the API
  getAllPeople() {
    this.http.get(`${this.API}/pictures`)
      .pipe(map(res => res.json()))
      .subscribe(picture => {
        console.log(picture)
        this.picture = picture
      }, error => console.log(error))
  }
}