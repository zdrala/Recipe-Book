import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe:Recipe;
  constructor(private slService:ShoppingListService,private recipeService:RecipeService) { }

  ngOnInit(): void {
  }
  addIngredientsToShoppingList(){
  //  this.slService.addIngredients(this.recipe.ingredients);
   this.recipeService.ingredientsToShoppingListAdd(this.recipe.ingredients);
  }
}
