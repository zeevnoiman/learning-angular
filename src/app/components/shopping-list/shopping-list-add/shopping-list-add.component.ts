import { Component, OnInit } from '@angular/core';

import {IngredientService} from '../../shared/ingredient.service';
@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styleUrls: [
    './styles.css'
  ]
})
export class ShoppingListAddComponent implements OnInit {
  ingredient: string = '';
  amount: number = 1;

  constructor(private ingredientService: IngredientService) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.ingredientService.changeMessage([{name: this.ingredient, amount: this.amount}])
  }

}
