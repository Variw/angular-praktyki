import { Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

type itemNumber = {id: number, count: number};
type itemInformation = { id: number, name: string, file: string, description: string };


@Injectable({
  providedIn: 'root',
})
export class DataModule {

  public items: itemInformation[] = [];
  public data = 0;
  public cart : itemNumber[] = [];
  public navList: string = "";

  public getItems() : Observable<itemInformation[]>{
    return from(fetch('http://localhost:3000/items').then(response => response.json())).pipe(
      map(data => {
        this.items = data as itemInformation[];
        console.log("Data ready");
        console.log(this.items.length);
        console.log(this.items);
        return this.items;
      })
    )
  }
}
