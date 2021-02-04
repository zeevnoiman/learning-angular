import { Component, OnInit } from '@angular/core';

import {ShareService} from '../service/share.service';
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
  constructor(private shareService: ShareService) { 
    this.recipe = {
      name:'',
      description: '',
      imagePath: ''
    };
  }

  ngOnInit(): void {
    this.shareService.currentMessage.subscribe(message => this.recipe = message)
  }

}
