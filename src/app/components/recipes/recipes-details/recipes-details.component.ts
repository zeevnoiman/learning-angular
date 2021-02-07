import { Component, OnInit } from '@angular/core';

import {ShareService} from '../service/share.service';
import {IngredientService} from '../../shared/ingredient.service';
import {Recipe} from '../recipes-list/Recipe';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: [
    './styles.css'
  ]
})
export class RecipesDetailsComponent implements OnInit {
  message: string = '';
  recipe:Recipe;
  constructor(private shareService: ShareService, private ingredientService: IngredientService) { 
    this.recipe = {
      name:'',
      description: '',
      imagePath: '',
      ingredients:[]
    };
  }

  ngOnInit(): void {
    this.shareService.currentMessage.subscribe(message => this.recipe = message)
  }

  addToShoppingList(): void{
    if(this.recipe.ingredients){
      this.ingredientService.changeMessage(this.recipe.ingredients)
    }
  }

}
