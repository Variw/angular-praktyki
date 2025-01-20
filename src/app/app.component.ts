import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import {HelloComponent} from './components/hello/hello.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'untitled';
}
