import { Component } from '@angular/core';
import { DataManagerService } from 'src/lib/data-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-mst-store';
  name: Promise<string> | null = null;

  constructor(private dataManager: DataManagerService) {}

  ngOnInit() {
    this.name = this.getName();
  }

  async getName(): Promise<string> {
    const animalBreedId = '/animal_breeds/52';
    const animalBreed = await this.dataManager.getAnimalBreed(animalBreedId);
    return animalBreed.name || 'unknown';
  }
}
