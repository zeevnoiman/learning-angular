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
        name : 'Silverbeet fatteh with sumac yoghurt and chickpeas',
        description : 'Try this dish with roast cauliflower, eggplant or roast pumpkin instead of silverbeet for a variation," says Tom Walton. Begin this recipe 1 day ahead',
        imagePath: 'https://img.delicious.com.au/Li2A8QDR/w759-h506-cfill/del/2020/09/silverbeet-fatteh-with-sumac-yoghurt-and-chickpeas-139202-1.jpg',
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
        name : 'The Full Monty burger',
        description : 'This great Aussie burger from Lucy Tweed is a must-have at any barbecue.',
        imagePath: 'https://img.delicious.com.au/rhJqDw_4/w759-h506-cfill/del/2021/01/the-full-monty-burger-144810-2.jpg',
        ingredients: [{
          name: 'sugar',
          amount: 6
        }]
      },
    ]


  }
}
