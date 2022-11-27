import {Component, OnInit} from '@angular/core';
import {RecipeModel} from "../../shared/models/recipe.model";
import {RecipeService} from "../../shared/services/recipe.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-recepe-detail',
  templateUrl: './recepe-detail.component.html'
})
export class RecepeDetailComponent implements OnInit {
  recipe: RecipeModel = new RecipeModel('','', []);
  id: number = 0;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const id = this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onDelete() {
    this.recipeService.deleteRecepe(this.id);
    this.router.navigate(['./recipes'])
  }

}
