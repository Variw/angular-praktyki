import {Component, inject} from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {delay, map, switchMap} from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import getDocumentElement from '@popperjs/core/lib/dom-utils/getDocumentElement';
import {RouterLink} from '@angular/router';
import {DataModule} from '../data/data.module';
import {Observable} from 'rxjs';

type Card = { id: number, title: string, cols: number, rows: number };
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  standalone: true,
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    RouterLink,
  ]
})
export class DashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);
  protected dataModule = inject(DataModule);
  protected data = null;
  saveData(id : HTMLElement | null ){
    if(id === null)
      return
    else
      this.dataModule.data = Number.parseInt(id.id);
  }

  cards : Observable<Card[]> = this.dataModule.getItems().pipe(
      map(() =>  {
        let returnedArray: Card[] = [];
        console.log("Card function");
        console.log(this.dataModule.items.length);
        for (let i = 0; i < this.dataModule.items.length; i++) {
          returnedArray.push({id: i + 1, title: `Card `, cols: 1, rows: 1})
          console.log(`pushed: ${i}`);
        }
        return returnedArray
      })
  );

  protected filteredCards = this.cards;

  cartItem(id : HTMLElement | null ){
    if(id === null)
      return console.error(id);
    else {
      console.log(`${id.id}; ${id.title}`);
      for(let i = 0;  i <= this.dataModule.cart.length; i++){
        if(this.dataModule.cart.length === 0){
          this.dataModule.cart.push({id: Number.parseInt(id.id), count: 1});
          break;
        }
        else if(this.dataModule.cart[i].id === Number.parseInt(id.id)){
          this.dataModule.cart[i].count++;
          break;
        }
        else if(i >= this.dataModule.cart.length-1){
          this.dataModule.cart.push({id: Number.parseInt(id.id), count: 1});
          break;
        }
      }
      this.dataModule.navList = "";
      for(let i = 0;  i < this.dataModule.cart.length; i++){
        this.dataModule.navList += '<p><img src="'+`${this.dataModule.items[this.dataModule.cart[i].id].file}"`+' alt="'+`${this.dataModule.items[this.dataModule.cart[i].id].name}`+'" width="30">'+
          'Quantity: '+`${this.dataModule.cart[i].count}`+'</p>';
      }
      console.log(this.dataModule.navList);
    }
  }

  filterResults(text : string)  {
    let returnedArray : Card[] = [];
    this.filteredCards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(() => {
          for (let i = 0; i < this.dataModule.items.length; i++) {
            console.log(`Loop: ${i}`);
            if (this.dataModule.items[i].name.toLowerCase().includes(text.toLowerCase())) {
              console.log("pushed");
              returnedArray.push({id: i + 1, title: `Card `, cols: 1, rows: 1});
            }
          }
          return returnedArray;
        })
      )
  }

  protected readonly getDocumentElement = getDocumentElement;
  protected readonly document = document;
}
