import { Injectable } from '@angular/core';

import {Recipe} from '../Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipes():Recipe[]{
    return [
      {
        name : 'sugar, salt, vinagger',
        description : 'A good salat sauce',
        imagePath: 'https://kaloriengeniessen.de/wp-content/uploads/2019/08/Einfache-Salat-Dressings-unter-100-Kalorien-4-1-683x1024.jpg',
        ingredients: [{
          name: 'sugar',
          amount: 2
        }]
      },
      {
        name : 'Chicken with rice',
        description : 'A delicius chicken with garlic seasoned rice',
        imagePath: 'https://i0.statig.com.br/bancodeimagens/el/p4/j7/elp4j7c4ninq57jqn436p1uda.jpg',
        ingredients: [{
          name: 'sugar',
          amount: 3
        }]
      },
      {
        name : 'chocolate mousse',
        description : 'A delicious chocolate mousse',
        imagePath: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT5Rl_-V7fM5HeemJfTjDv8pB5Vb6JPbBt8Mgkfn1s5pZHhbV3xI3Rj9KSkc7yOhJ5UrXwskMzVKTS2s9vUi7o',
        ingredients: [{
          name: 'sugar',
          amount: 4
        }]
      
      },
      {
        name : 'Greek Salad',
        description : 'The famous greek salad',
        imagePath: 'https://kaloriengeniessen.de/wp-content/uploads/2019/08/Einfache-Salat-Dressings-unter-100-Kalorien-4-1-683x1024.jpg',
        ingredients: [{
          name: 'sugar',
          amount: 5
        }]
      },
      {
        name : 'Barbecue',
        description : 'A master barbecue',
        imagePath: 'https://kaloriengeniessen.de/wp-content/uploads/2019/08/Einfache-Salat-Dressings-unter-100-Kalorien-4-1-683x1024.jpg',
        ingredients: [{
          name: 'sugar',
          amount: 6
        }]
      },
    ]


  }
}
