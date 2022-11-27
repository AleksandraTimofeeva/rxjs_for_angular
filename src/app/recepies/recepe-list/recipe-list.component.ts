import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';

import {RecipeModel} from "../../shared/models/recipe.model";
import {RecipeService} from "../../shared/services/recipe.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recepe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit, OnDestroy {

  @Output() recipeWasSelected = new EventEmitter<RecipeModel>();
  recipes: RecipeModel[] = [];
  subscription: Subscription = new Subscription();

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.subscription = this.recipeService.recipesChanged
      .subscribe(
        (recipes: RecipeModel[]) => {
          this.recipes = recipes;
        }
      );

    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
