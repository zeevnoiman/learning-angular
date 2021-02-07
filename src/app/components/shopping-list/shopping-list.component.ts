import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient';
import {IngredientService} from '../shared/ingredient.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styles: [
  ]
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[] = [];
  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void {
    this.ingredientService.currentMessage.subscribe(message => {
      this.ingredients = [...this.ingredients, ...message];
    });
  }
}
