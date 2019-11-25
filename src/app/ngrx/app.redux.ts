import * as fromLista from './lista/list.reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
  list: fromLista.State;
}

export const AppReducers: ActionReducerMap<AppState> = {
  list: fromLista.reducer
};

import { ListEffect } from './lista/list.effect';


export const effectsArr: any[] = [ ListEffect ];

