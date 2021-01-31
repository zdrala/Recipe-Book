import { Component, ElementRef,  OnDestroy,  OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit ,OnDestroy{
  @ViewChild('f') form:NgForm;
  subscription:Subscription;

  ingredient:Ingredient;
  editMode=false;
  editItemIndex:number;

  editedItem:Ingredient;
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
    this.subscription=this.shoppingListService.startingEdit.subscribe(
      (index:number)=>{
        this.editItemIndex=index;
        this.editMode=true;
        this.editedItem=this.shoppingListService.getIngredient(index);
        this.form.setValue({
          name:this.editedItem.name,
          amount:this.editedItem.amount
        });
      }
    );
  }
  onSubmit(Form: NgForm){
   const forma=Form.value;  
   this.ingredient=new Ingredient(forma.name,forma.amount);
   if(this.editMode)
   {
     this.shoppingListService.updateIngredient(this.editItemIndex,this.ingredient);
   }
   else{
    this.shoppingListService.addItemToArray(this.ingredient);
   }
   this.editMode=false;
   this.form.reset();
  }
  onClear(){
    this.form.reset();
    this.editMode=false;
  }
  onDelete(){
    this.shoppingListService.deleteIngredient(this.editItemIndex);
    this.onClear();
  }
  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }
}
