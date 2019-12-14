import * as fromLista from './lista/list.reducer';
import * as fromUser from './user/user.reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
  list: fromLista.State;
  user: fromUser.State;
}

export const AppReducers: ActionReducerMap<AppState> = {
  list: fromLista.reducer,
  user: fromUser.reducer
};

import { ListEffect } from './lista/list.effect';


export const effectsArr: any[] = [ ListEffect ];

