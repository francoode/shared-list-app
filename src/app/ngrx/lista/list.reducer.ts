import {List} from './list.model';
import * as fromLista from './list.actions';

export const listaFeatureKey = 'lista';

export interface State {
  loading: boolean;
  error: any;
  entities: List[];
  ids: [];
}

export const initialState: State = {
  loading: false,
  entities: [],
  ids: [],
  error: null
};

export function reducer(state = initialState, action: fromLista.ListActions) {
  switch (action.type) {
    case fromLista.ListActionTypes.LoadLists:
      console.log('load');
      return {
        ...state,
        loading: true,
      };
    case fromLista.ListActionTypes.LoadListsSuccess:
      return {
        loading: false,
        ...state,
      };
    case fromLista.ListActionTypes.LoadListsFailure:
      return {
        ...state,
        loading: true,
      };
    case fromLista.ListActionTypes.AddList:
      return {
        ...state,
        loading: true
      };
    case fromLista.ListActionTypes.AddListFailure:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case fromLista.ListActionTypes.AddListSuccess:
      return {
        ...state,
        entities: [...state.entities, action.payload.data]
      };
    default:
      return {
        ...state
      };
  }
}
