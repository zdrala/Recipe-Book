import {  Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
 
    private recipes: Recipe []=[
        new Recipe('A Test Recipe','This is simply a test','https://www.eatwell101.com/wp-content/uploads/2019/04/chicken-and-asparagus-skillet-recipe-2.jpg',
        [new Ingredient('Lemon',1),
        new Ingredient('Meat',1)]),
        new Recipe('A Test Recipe 2','This is simply a test 2','https://www.biggerbolderbaking.com/wp-content/uploads/2019/07/15-Minute-Pizza-WS-Thumbnail.png',
        [new Ingredient('Bread',1),
        new Ingredient('ketchup',1),
        new Ingredient('Cheese',2)])
      ];
    constructor(private slService:ShoppingListService){}

      getRecipes()
      {
          return this.recipes.slice();
      }
      getRecipe(index:number)
      {
        return this.recipes[index];
      }
      ingredientsToShoppingListAdd(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
      }    
}