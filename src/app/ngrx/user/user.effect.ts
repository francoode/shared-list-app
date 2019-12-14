import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, exhaustMap, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {AddUser, AddUserFailure, AddUserSuccess, UserActionTypes} from './user.actions';
import {User} from './user.model';
import {UserService} from '../../services/user.service';
import {AuthService} from '../../services/auth.service';


@Injectable()
export class UserEffect {
  constructor(
    private actions$: Actions,
    private service: UserService,
    private auth: AuthService
  ) {
  }


  addUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionTypes.AddUser),
      switchMap((action: AddUser) => {
        return this.service.add(action.payload.data);
      }),
      map((user: User) => {
        return new AddUserSuccess({data: user});
      }),
      catchError((err => of(new AddUserFailure({error: err}))))
    )
  );

  setUserLS$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionTypes.AddUserSuccess),
      map((action: AddUserSuccess) => {
        this.auth.setLocalStorageUser(action.payload.data);
      })
    ), {dispatch: false});
}
