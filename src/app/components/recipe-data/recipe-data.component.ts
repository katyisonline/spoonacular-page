import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeDetails, Ingredient } from '../../interfaces/recipe-data'
import { GetDataService } from 'src/app/services/get-data/get-data.service';

@Component({
  selector: 'app-recipe-data',
  templateUrl: './recipe-data.component.html',
  styleUrls: ['./recipe-data.component.css']
})
export class RecipeDataComponent implements OnInit {
  recipeId: number = 0;
  summary: string = '';
  ingredients: Ingredient[] = [];
  instructions: string = '';
  recipeData!: any;
  readyIn: number = 0;
  servings: number = 0;

  constructor(private data: GetDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id')
      if (id !== null && id !== undefined) {
        this.recipeId = +id;
      }
      this.data.getRecipeData(this.recipeId).subscribe((data: RecipeDetails) => {
        this.recipeData = data;
        console.log(this.recipeData)
        this.ingredients = this.recipeData.extendedIngredients;
        this.instructions = this.recipeData.instructions;
        this.summary = this.recipeData.summary;
        this.servings = this.recipeData.servings;
        this.readyIn = this.recipeData.readyInMinutes;


        if (this.instructions.includes('<ol>', 0)) {
          console.log('List is already ordered')
        } else {
          if (this.instructions.includes('<p>', 0)) {
            var instructionList = this.instructions.substring(3, (this.instructions.length - 4));
            var instructionArr = instructionList.split('.');

            // creating list items out of array items
            var newInstructions = instructionArr.map((i) => { return '< li>' + i + '</li>' })
            newInstructions.unshift('<ol>')
            newInstructions.push('</ol>');

            const orderedInstructions = newInstructions.join('')
            this.instructions = orderedInstructions;
          } else {
            var instructionArr = this.instructions.split('. ');
            // creating list items out of array items
            var newInstructions = instructionArr.map((i) => { return '<li>' + i + '</li>' })
            newInstructions.unshift('<ol>')
            newInstructions.push('</ol>');
            const orderedInstructions = newInstructions.join('')
            this.instructions = orderedInstructions;
          }

        }



      })

    })
  }
}
