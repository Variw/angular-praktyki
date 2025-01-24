import {Component, OnInit} from '@angular/core';
import { RouterOutlet} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {NavComponent} from './components/nav/nav.component';
import {DataService, Item} from './components/services/data.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DashboardComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent implements OnInit{
  title = 'Shop';
  items: Item[] = [];
  constructor(private dataService : DataService) { }
  ngOnInit() : void {
    this.dataService.getItems().subscribe((data) => {
      this.items = data;
      console.log(this.items);
    })
  }
}

