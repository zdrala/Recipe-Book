import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  ingredient:Ingredient;

  @Output() addItemEvent=new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }
  addItem(){
   this.ingredient=new Ingredient(this.nameInputRef.nativeElement.value,this.amountInputRef.nativeElement.value);
   this.addItemEvent.emit(this.ingredient);
  }
}
