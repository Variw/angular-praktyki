import { Injectable } from '@angular/core';

type itemNumber = {id: number, count: number}
@Injectable({
  providedIn: 'root',
})
export class DataModule {

  public data = 0;
  public cart : itemNumber[] = [];
  public navList: string = "";

}
