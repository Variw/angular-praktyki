import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Item {
  id: number,
  name: string,
  file: string,
  description: string
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000/items';
  constructor(private http: HttpClient) { }

  getItems() : Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }
}
