import { Component, OnInit } from '@angular/core';

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

  constructor() { 
    this.recipes = [
      {
        name : 'sugar, salt, vinagger',
        description : 'A good salat sauce',
        imagePath: 'https://kaloriengeniessen.de/wp-content/uploads/2019/08/Einfache-Salat-Dressings-unter-100-Kalorien-4-1-683x1024.jpg'
      },
      {
        name : 'Chicken with rice',
        description : 'A delicius chicken with garlic seasoned rice',
        imagePath: 'https://i0.statig.com.br/bancodeimagens/el/p4/j7/elp4j7c4ninq57jqn436p1uda.jpg'
      },
      {
        name : 'chocolate mousse',
        description : 'A delicious chocolate mousse',
        imagePath: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT5Rl_-V7fM5HeemJfTjDv8pB5Vb6JPbBt8Mgkfn1s5pZHhbV3xI3Rj9KSkc7yOhJ5UrXwskMzVKTS2s9vUi7o'
      },
      {
        name : 'Greek Salad',
        description : 'The famous greek salad',
        imagePath: 'https://kaloriengeniessen.de/wp-content/uploads/2019/08/Einfache-Salat-Dressings-unter-100-Kalorien-4-1-683x1024.jpg'
      },
      {
        name : 'Barbecue',
        description : 'A master barbecue',
        imagePath: 'https://kaloriengeniessen.de/wp-content/uploads/2019/08/Einfache-Salat-Dressings-unter-100-Kalorien-4-1-683x1024.jpg'
      },
  ]
  }

  ngOnInit(): void {
  }

  setChoosenRecipe(name: string){
    this.choosenRecipe = name as string
  }
}
