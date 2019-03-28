import { Component, OnInit } from '@angular/core';
import { Picture } from '../shared/models/picture.model';
import { PictureService } from '../shared/service/picture/picture.service';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {

  pictures: Picture[];
  constructor(
    private pictureService: PictureService
    ) { }
 
  ngOnInit() {
   this.getPictures();
  }
   
  getPictures(): void {
    this.pictureService.getPictures()
    .subscribe(pictures => this.pictures = pictures );
  }
}
