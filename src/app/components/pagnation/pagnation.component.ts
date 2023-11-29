import { Component, EventEmitter } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data/get-data.service';
import { RecipeData, Recipe } from 'src/app/interfaces/recipe-data';
@Component({
  selector: 'app-pagnation',
  templateUrl: './pagnation.component.html',
  styleUrls: ['./pagnation.component.css'],
})
export class PagnationComponent {
  pages: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  recipes: Recipe[] = [];
  constructor(private data: GetDataService) {}

  nextPage = () => {
    this.data.getRecipes().subscribe((data: RecipeData) => {
      this.recipes = data.results;
    });
  };
}
