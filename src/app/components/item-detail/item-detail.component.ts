import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet} from '@angular/router';
import { Router } from '@angular/router';
import {DataModule} from '../data/data.module';

type itemInformation = { id: number, name: string, file: string, description: string };

@Component({
  selector: 'app-item-detail',
  imports: [CommonModule, RouterOutlet],
  standalone: true,
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent {
  protected dataModule = inject(DataModule);
  constructor(private router: Router) {
    this.itemData = this.asyncDataBind().then(r => r);
  }
  public itemData : Promise<itemInformation>;
  navigateToAnotherRoute() {
    this.router.navigate(['src/app/components/home']);
  }
  async asyncDataBind(){
    return this.dataModule.items[this.dataModule.data-1];
  }


}

