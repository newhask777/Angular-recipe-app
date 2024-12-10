import { Component } from '@angular/core';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  imports: [RecipesListComponent, RecipesDetailComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
  selectedRecipe: Recipe;

}
