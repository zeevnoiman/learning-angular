import { IcuPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../Recipe';
import {ShareService} from '../../service/share.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: [
    './styles.css'
  ]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() even: boolean;
  @Input() odd: boolean;
  @Output() imageClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor(private shareService: ShareService) {
    this.recipe = {
      name: '',
      description: '',
      imagePath: '',
    };
    this.even = false;
    this.odd = false;
   }

  ngOnInit(): void {
  }

  onImageClicked(): void {
    this.shareService.changeMessage(this.recipe)
  }
}
