import {  Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
 
  recipesChanged=new Subject<Recipe[]>();
    // private recipes: Recipe []=[
    //     new Recipe('A Test Recipe','This is simply a test','https://www.eatwell101.com/wp-content/uploads/2019/04/chicken-and-asparagus-skillet-recipe-2.jpg',
    //     [new Ingredient('Lemon',1),
    //     new Ingredient('Meat',1)]),
    //     new Recipe('A Test Recipe 2','This is simply a test 2','https://www.biggerbolderbaking.com/wp-content/uploads/2019/07/15-Minute-Pizza-WS-Thumbnail.png',
    //     [new Ingredient('Bread',1),
    //     new Ingredient('ketchup',1),
    //     new Ingredient('Cheese',2)])
    //   ];
      private recipes: Recipe []=[];
    constructor(private slService:ShoppingListService){}
       
      setRecipes(recipes: Recipe[])
      {
      this.recipes=recipes;
      this.recipesChanged.next(this.recipes.slice());
      }

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

      addRecipe(recipe: Recipe)
      {
        this.recipes.push(recipe)
        this.recipesChanged.next(this.recipes.slice());
      }
      updateRecipe(index:number,recipe:Recipe)
      {
        this.recipes[index]=recipe;
        this.recipesChanged.next(this.recipes.slice());
      }
      deleteRecipe(index:number)
      {
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
      }
}