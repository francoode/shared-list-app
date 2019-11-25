import { Action } from '@ngrx/store';
import { List } from './list.model';

export enum ListActionTypes {
  LoadLists = '[List] Load Lists',
  LoadListsSuccess = '[List] Load Lists Success',
  LoadListsFailure = '[List] Load Lists Failure',
  AddList = '[List] Add List',
  AddListSuccess = '[List] Add List Success',
  AddListFailure = '[List] Add List Failuer',
}

export class LoadLists implements Action {
  readonly type = ListActionTypes.LoadLists;
}

export class LoadListsSuccess implements Action {
  readonly type = ListActionTypes.LoadListsSuccess;
  constructor(public payload: { data: List[] }) { }
}

export class LoadListsFailure implements Action {
  readonly type = ListActionTypes.LoadListsFailure;
  constructor(public payload: { error: any }) { }
}

export class AddList implements Action {
  readonly type = ListActionTypes.AddList;
  constructor(public payload: { data: List }) { }
}

export class AddListSuccess implements Action {
  readonly type = ListActionTypes.AddListSuccess;
  constructor(public payload: { data: List }) { }
}

export class AddListFailure implements Action {
  readonly type = ListActionTypes.AddListFailure;
  constructor(public payload: { error: any }) { }
}



export type ListActions = LoadLists | LoadListsSuccess | LoadListsFailure |
                          AddList | AddListSuccess | AddListFailure;

