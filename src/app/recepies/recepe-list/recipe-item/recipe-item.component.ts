import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeModel} from "../../../shared/models/recipe.model";

@Component({
  selector: 'app-recepe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: RecipeModel = new RecipeModel('default','', []);
  @Input() index: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
