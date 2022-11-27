import {Component, OnDestroy, OnInit} from '@angular/core';
import {IngredientModel} from "../shared/models/ingredient.model";
import {ShoppingListService} from "../shared/services/shopping-list.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: IngredientModel[] = []
  private idChangeSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) {
    this.idChangeSub = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: IngredientModel[])=> {
        this.ingredients=ingredients;
      }
    )
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
  }

  ngOnDestroy() {
    this.idChangeSub.unsubscribe();
  }

  onIngredientAdded(ingredient: IngredientModel) {
    this.ingredients.push(ingredient)
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index)
  }


}
