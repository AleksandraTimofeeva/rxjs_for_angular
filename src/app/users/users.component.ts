import { Component, OnInit } from '@angular/core';
import {AddUserComponent} from "../add-user/add-user.component";
import {catchError, shareReplay, switchMap} from "rxjs/operators";
import {IUser, UsersService} from "../shared/services/users.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {BehaviorSubject, Observable, Subscription} from "rxjs";
import {empty, from} from "rxjs";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

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
  }

  addUser() {
    const modal = this.modalService.open(AddUserComponent)
    this.subscription.add(from(modal.result)
      .pipe(
        catchError(err => empty()),
        switchMap(data => this.usersService.createUser(data))
      )
      .subscribe(
        () => {
          // setInterval(() => { console.log('Hi')}, 1000);
          this.refresh.next({})
        }
      )
    )
  }

  deleteUser(user: IUser) {
    this.usersService.deleteUser(user).subscribe()
  }

}
