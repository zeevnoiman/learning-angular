import { Component, OnInit } from '@angular/core';

import {RecipeService} from './service/recipe-service.service';
import { Recipe } from './Recipe';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: [
    './styles.css'
  ]
})
export class RecipesListComponent implements OnInit {

  recipes:Recipe[];
  choosenRecipe: string = ''

  constructor(private recipeService: RecipeService) {
    this.recipes = []
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
}
