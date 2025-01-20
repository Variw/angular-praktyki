import {Component, computed, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-hello',
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css',
})
export class HelloComponent {
  number = signal(1);
  doubleCount = computed( () => this.number() * 2);
  buttonClass: string = "on";

  increment(){
    this.number.update((number) => number + 1);
  }
  hide(){
  this.buttonClass = "off";
  }
}

