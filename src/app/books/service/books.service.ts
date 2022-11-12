import {Injectable} from '@angular/core';
import {Author} from '../model/Author';
import {HttpClient, HttpParams} from '@angular/common/http';
//Yasin J
const Url = 'http://localhost:8080/authors-api/';

@Injectable({

providedIn:'root'

})

export class AuthorsService{
  constructor(private http: HttpClient) {}

}

public getAuthor(id: string): Observable<Author> {
  return this.http.get<Author>(Url + 'authors/' + id);

}


public addAuthor(id: number, author: Author): Observable<Author> {
  return this.http.post<Author>(id + '/authors', author);
 }




