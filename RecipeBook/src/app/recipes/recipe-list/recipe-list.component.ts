import { Component, OnInit } from '@angular/core';
 
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe []=[
  new Recipe('A Test Recipe','This is simply a test','https://www.eatwell101.com/wp-content/uploads/2019/04/chicken-and-asparagus-skillet-recipe-2.jpg'),
  new Recipe('A Test Recipe 2','This is simply a test 2','https://www.eatwell101.com/wp-content/uploads/2019/04/chicken-and-asparagus-skillet-recipe-2.jpg')
];
  constructor() { }

  ngOnInit(): void {
  }

}
