import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import {Ingredient} from './ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  ingredients:Ingredient[];

  private messageSource = new BehaviorSubject<Ingredient[]>([]);
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: Ingredient[]) {
    this.messageSource.next([...this.messageSource.getValue() , ...message])
  }


  constructor() {
    this.ingredients = [{
      name: 'salt',
      amount: 3
    }];
  }

  getIngredients():Ingredient[]{
    return this.ingredients;
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients = [...this.ingredients, ingredient]
  }
}
