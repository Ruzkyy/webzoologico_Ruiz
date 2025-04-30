import { Component } from '@angular/core';
import { AnimalService } from '../../services/animal.service';

@Component({
  selector: 'app-animal',
  imports: [],
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.css'
})
export class AnimalComponent {
  animalList: any = [];

  getAllAnimals() {
    console.log('en componente');
    this.animalService.getAllAnimalsData().subscribe((data: {}) => {
      this.animalList = data;
    });
  }
  constructor(private animalService: AnimalService) { }


  ngOnInit() {
    this.getAllAnimals();
  }

}