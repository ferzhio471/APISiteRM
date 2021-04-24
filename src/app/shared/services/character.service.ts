import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { TrackHttpError } from '@shared/models/trackHttpError';
import { catchError } from 'rxjs/operators';
import { environment } from '@environment/environment';
import { Character } from '../interface/character.interface';

@Injectable({
  providedIn: 'root',
})

export class CharacterService {
  constructor(private http: HttpClient) { }

  searchCharacters(query = '', page = 200): Observable<Character[] | TrackHttpError> {
    
    //filtro de busqueda respecto a la api
    const filter = `${environment.APIUrl}/?name=${query}&page=${page}`;
    
    return this.http.get<Character[]>(filter)
      .pipe(catchError((err) => this.handleHttpError(err)));

  }

  //metodo para obtener detalles onclick
  getDetails(id: number) {

    return this.http.get<Character>(`${environment.APIUrl}/${id}`)
      .pipe(catchError((err) => this.handleHttpError(err)));
      
  }


  private handleHttpError(
    error: HttpErrorResponse
  ): Observable<TrackHttpError> {

    let dataError = new TrackHttpError();
    dataError.errorNumber = error.status;
    dataError.message = error.statusText;
    dataError.friendlyMessage = 'An error occured retrienving data.';
    return throwError(dataError);
  }
}
