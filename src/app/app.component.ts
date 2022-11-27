import {Component, OnDestroy, OnInit} from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { Observable, from, empty, BehaviorSubject, Subscription } from "rxjs";

import { AddUserComponent} from "./add-user/add-user.component";
import { IUser, UsersService } from "./shared/services/users.service";
import {catchError, map, shareReplay, switchMap} from "rxjs/operators";
import {ajax} from "rxjs/ajax";
import {of} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy{

  loadedFeature = 'recipe';

  private readonly refresh = new BehaviorSubject({});

  private readonly subscription = new Subscription();

  public users: Observable<IUser[]>;

  closeResult = '';

  constructor(private modalService: NgbModal,
              private usersService: UsersService) {

     this.users = this.refresh.pipe(
       switchMap(() => this.usersService.getUsers()),
       shareReplay(1)
     )
  }

  ngOnInit(): void {
    let testVar = false;

    const link =
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
    let observable = ajax({url: link})
      .pipe(
        map((userResponse: any) => userResponse.response.drinks[1].strDrink),
        catchError((error) => {
          console.log('error: ', error);
          return of(error);
        })
      )
      .subscribe({
        next: (x) => {
          testVar = true
          console.log('data: ', x)
          console.log('data: ', x)
        },
        complete: () => console.log('finished'),
      });
  }

  // addUser() {
  //   const modal = this.modalService.open(AddUserComponent)
  //   this.subscription.add(from(modal.result)
  //     .pipe(
  //       catchError(err => empty()),
  //       switchMap(data => this.usersService.createUser(data))
  //     )
  //     .subscribe(
  //       () => {
  //         // setInterval(() => { console.log('Hi')}, 1000);
  //         this.refresh.next({})
  //       }
  //     )
  //   )
  // }
  //
  //  deleteUser(user: IUser) {
  //    this.usersService.deleteUser(user).subscribe()
  //  }

   ngOnDestroy() {
    this.subscription.unsubscribe();
   }

   // сделать удаление и редактирование юзера

  // модалка
  // инпут


  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
