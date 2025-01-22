import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {NavComponent} from './components/nav/nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DashboardComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'Shop';
}

