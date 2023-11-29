import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeCardsComponent } from './components/recipe-cards/recipe-cards.component';
import { RecipeDataComponent } from './components/recipe-data/recipe-data.component';

const routes: Routes = [
  {path: 'recipes', component: RecipeCardsComponent, title: 'Recipe Search'},
  {path: 'recipe-data/:id', component: RecipeDataComponent, title: 'Recipe Data'},
  {path: '**', redirectTo: '/recipes'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
