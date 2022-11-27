import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecepiesComponent} from "./recepies/recepies.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipeStartComponent} from "./recepies/recipe-start/recipe-start.component";
import {RecepeDetailComponent} from "./recepies/recepe-detail/recepe-detail.component";
import {RecipeEditComponent} from "./recepies/recipe-edit/recipe-edit.component";
import {UsersComponent} from "./users/users.component";

const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecepiesComponent, children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent },
      {path: ':id', component: RecepeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent },
    ]},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'users', component: UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
