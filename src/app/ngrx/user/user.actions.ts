import { Action } from '@ngrx/store';
import { User } from './user.model';

export enum UserActionTypes {
  LoadUsers = '[User] Load Users',
  LoadUsersSuccess = '[User] Load Users Success',
  LoadUsersFailure = '[User] Load Users Failure',
  AddUser = '[User] Add User',
  AddUserSuccess = '[User] Add User Success',
  AddUserFailure = '[User] Add User Failuer',
}

export class LoadUsers implements Action {
  readonly type = UserActionTypes.LoadUsers;
}

export class LoadUsersSuccess implements Action {
  readonly type = UserActionTypes.LoadUsersSuccess;
  constructor(public payload: { data: User[] }) { }
}

export class LoadUsersFailure implements Action {
  readonly type = UserActionTypes.LoadUsersFailure;
  constructor(public payload: { error: any }) { }
}

export class AddUser implements Action {
  readonly type = UserActionTypes.AddUser;
  constructor(public payload: { data: User }) { }
}

export class AddUserSuccess implements Action {
  readonly type = UserActionTypes.AddUserSuccess;
  constructor(public payload: { data: User }) { }
}

export class AddUserFailure implements Action {
  readonly type = UserActionTypes.AddUserFailure;
  constructor(public payload: { error: any }) { }
}



export type UserActions = LoadUsers | LoadUsersSuccess | LoadUsersFailure |
                          AddUser | AddUserSuccess | AddUserFailure;

