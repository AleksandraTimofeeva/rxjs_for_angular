import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AddUserComponent } from "./add-user/add-user.component";
import { UsersService } from "./shared/services/users.service";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { RecipeListComponent } from './recepies/recepe-list/recipe-list.component';
import { RecepeDetailComponent } from './recepies/recepe-detail/recepe-detail.component';
import { RecipeItemComponent } from './recepies/recepe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeService} from "./shared/services/recipe.service";
import { ShoppingListService} from "./shared/services/shopping-list.service";
import { AppRoutingModule} from "./app-routing.module";
import { RecipeStartComponent } from './recepies/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recepies/recipe-edit/recipe-edit.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    SidebarComponent,
    HeaderComponent,
    RecepiesComponent,
    RecipeListComponent,
    RecepeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    UsersComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    UsersService,
    RecipeService,
    ShoppingListService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
