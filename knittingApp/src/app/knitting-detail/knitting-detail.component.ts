import { Component, OnInit } from '@angular/core';
import { Picture } from '../shared/models/picture.model';
import { PictureService } from '../shared/service/picture/picture.service';

@Component({
  selector: 'app-knitting-detail',
  templateUrl: './knitting-detail.component.html',
  styleUrls: ['./knitting-detail.component.css']
})
export class KnittingDetailComponent implements OnInit {
  pictures: Picture[];
  constructor(
    private pictureService: PictureService
    ) { }
 
  ngOnInit() {
    this.getPictures()
  }
   
  getPictures(): void {
    this.pictureService.getPictures()
    .subscribe(pictures => this.pictures = pictures);
    console.log('pictures', this.pictures);
  }  
}
