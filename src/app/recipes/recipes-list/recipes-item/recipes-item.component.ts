import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipes-item',
  imports: [],
  templateUrl: './recipes-item.component.html',
  styleUrl: './recipes-item.component.css'
})
export class RecipesItemComponent {
  @Input() recipe: Recipe;
  
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() {

  }

  onSelected() {
    this.recipeSelected.emit();
  }

}
