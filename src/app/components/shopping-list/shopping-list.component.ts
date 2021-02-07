import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

import { Ingredient } from '../shared/ingredient';
import {IngredientService} from '../shared/ingredient.service';
import {ShoppingListAddComponent} from './shopping-list-add/shopping-list-add.component'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: [
    './styles.css'
  ]
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[] = [];
  constructor(private ingredientService: IngredientService, public dialog: MatDialog, private http: HttpClient) { }

  ngOnInit(): void {
    this.ingredientService.currentMessage.subscribe(message => {
      this.ingredients = [...message];
      console.log(this.ingredients);
      
    });
  }

  openDialog(){
    const dialogRef = this.dialog.open(ShoppingListAddComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  saveToDB(){
    this.http.put(
      "https://learning-angular-dc2dc-default-rtdb.firebaseio.com/ingredients.json",
      this.ingredients
    ).subscribe(res => {
      console.log(res);
      
    })
  }
}
