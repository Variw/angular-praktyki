import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet} from '@angular/router';
import { Router } from '@angular/router';
import {DataModule} from '../data/data.module';
import * as itemDataDownloaded from '../../../../public/assets/data/itemdata.json'

type itemInformation = { id: number, name: string, description: string };

@Component({
  selector: 'app-item-detail',
  imports: [CommonModule, RouterOutlet],
  standalone: true,
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent {
  private dataModule = inject(DataModule);
  public itemDataJSON: itemInformation[]  = (itemDataDownloaded as any).default
  constructor(private router: Router) {
    if(this.dataModule.data === 1)
      this.itemData = this.itemDataJSON[0];
    else if(this.dataModule.data === 2)
      this.itemData = this.itemDataJSON[1] as itemInformation;
  }
  public itemData : itemInformation = { id: 0, name: "", description: "" };
  navigateToAnotherRoute() {
    this.router.navigate(['src/app/components/home']);
  }
}

