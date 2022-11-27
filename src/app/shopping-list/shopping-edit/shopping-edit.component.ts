import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

import {IngredientModel} from "../../shared/models/ingredient.model";
import {ShoppingListService} from "../../shared/services/shopping-list.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html'
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form') shoppingListForm: NgForm = new NgForm([], []);

  subscription: Subscription;
  editMode = false;
  editedItemIndex: number = 0;
  editedItem: IngredientModel | undefined;

  constructor(private shoppingListService: ShoppingListService) {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.shoppingListService.getIngredient(index);
          this.shoppingListForm.setValue({
            name: this.editedItem.name
          })
        }
      );
  }

  ngOnInit(): void {
  }

  addElement(form: NgForm) {
    const value = form.value;
    const newIngredient = new IngredientModel(value.name, value.amount);
    if( this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient)
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    this.shoppingListForm.reset();
  }

  deleteElement() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.clearElements();
  }

  clearElements() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
