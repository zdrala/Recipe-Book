import { Component, Input, OnInit ,EventEmitter, Output} from '@angular/core';
import { ɵEmptyOutletComponent } from '@angular/router';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() recipe: Recipe;
  @Output() itemSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }
  selectItem(){
  this.itemSelected.emit();
  }
}
