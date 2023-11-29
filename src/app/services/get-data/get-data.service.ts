import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeData, RecipeDetails } from '../../interfaces/recipe-data'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GetDataService {

  private apiKey = '5d5aadf7f08d43478f420ddebf6ec48b';
  public numberOfRecipes: number = 20;
  constructor(private http: HttpClient) { }

  getRecipes(moreRecipes?: number): Observable<RecipeData> {

    if (moreRecipes !== undefined && moreRecipes !== null) {
      const updatedNumber: number = this.numberOfRecipes + moreRecipes;
      const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${this.apiKey}&number=` + updatedNumber;
      return this.http.get<RecipeData>(url);

    } else {
      const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${this.apiKey}&number=${this.numberOfRecipes}`;
      return this.http.get<RecipeData>(url);
    }
  }


  getRecipeData(id: number): Observable<RecipeDetails> {
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${this.apiKey}`
    return this.http.get<RecipeDetails>(url);
  }

}
