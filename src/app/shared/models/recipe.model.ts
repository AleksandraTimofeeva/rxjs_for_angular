import {IngredientModel} from "./ingredient.model";

export class RecipeModel {
  public name: string;
  public description: string;
  public ingredients: IngredientModel[];

  constructor(name: string, description: string, ingredients: IngredientModel[]) {
  this.name = name;
  this.description = description;
  this.ingredients = ingredients;
  }
}
