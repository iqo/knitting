import { Injectable } from '@angular/core';
import { Picture } from '../../models/picture.model'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from '../message/message.service';
@Injectable({
  providedIn: 'root'
})
export class PictureService {

  // private pictureUrl = 'localhost:6001/pictures';
  private pictureUrl = '127.0.0.1:6001';
  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) { }

  /** GET heroes from the server */
getPictures(): Observable<Picture[]> {
  return this.http.get<Picture[]>(this.pictureUrl)
    .pipe(
      tap(_ => this.log('fetched pictures')),
      catchError(this.handleError<Picture[]>('getHeroes', []))
    );
}

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
     
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
     
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
     
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
      this.messageService.add(`pictureService: ${message}`);
    }

}
