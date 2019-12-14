import {Injectable} from '@angular/core';
import {ListService} from '../../services/list.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {AddUser, AddUserFailure, AddUserSuccess, UserActionTypes} from './user.actions';
import {User} from './user.model';
import {UserService} from '../../services/user.service';



@Injectable()
export class UserEffect {
  constructor(
    private actions$: Actions,
    private service: UserService
  ) {
  }


  addList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionTypes.AddUser),
      switchMap((action: AddUser) => this.service.add(action.payload.data)),
      map((user: User) => {
        return new AddUserSuccess({data: user});
      }),
      catchError((err => of(new AddUserFailure({error: err}))))
    )
  );
}
