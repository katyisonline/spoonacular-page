import { Component } from '@angular/core';
import { GetDataService } from '../../services/get-data/get-data.service';
import { RecipeData, Recipe } from '../../interfaces/recipe-data'
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-cards',
  templateUrl: './recipe-cards.component.html',
  styleUrls: ['./recipe-cards.component.css']
})
export class RecipeCardsComponent {
  recipes: Recipe[] = [];
  constructor(private data: GetDataService, private router: Router) { }

  onRecipeClick(id: number){
    this.router.navigate(['recipe-data', id])
  }

  ngOnInit() {
    this.data.getRecipes().subscribe((data: RecipeData) => {
      this.recipes = data.results;
    })

  }
}
