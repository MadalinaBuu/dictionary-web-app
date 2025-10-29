import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  private apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  constructor(private http: HttpClient) { }

  //Metodă pentru a căuta un cuvânt
  getDefinition(word: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${word}`);
  }
}
