import { Injectable } from '@angular/core';
import { Picture } from '../models/picture.model'
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor(private http: Http) { }

  getPictures(){
  }
}
