import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './components/shopping-list/shopping-list-add/shopping-list-add.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { RecipesDetailsComponent } from './components/recipes/recipes-details/recipes-details.component';
import { RecipeItemComponent } from './components/recipes/recipes-list/recipe-item/recipe-item.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListAddComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailsComponent,
    RecipeItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
