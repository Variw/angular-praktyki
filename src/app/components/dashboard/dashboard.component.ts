import {Component, inject} from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import getDocumentElement from '@popperjs/core/lib/dom-utils/getDocumentElement';
import {RouterLink} from '@angular/router';
import {DataModule} from '../data/data.module';
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
  private dataModule = inject(DataModule);

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }
      return [
        { title: 'Card 1', cols: 1, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 1 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );
  saveData(id : HTMLElement | null ){
    if(id === null)
      return
    else
      this.dataModule.data = Number.parseInt(id.id);
  }
  cartItem(id : HTMLElement | null ){
    if(id === null)
      return
    else {
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
        this.dataModule.navList += `<p>${this.dataModule.cart[i].id} | ${this.dataModule.cart[i].count}</p>`
      }
    }
  }
  protected readonly getDocumentElement = getDocumentElement;
  protected readonly document = document;
}
