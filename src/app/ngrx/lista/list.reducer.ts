import {List} from './list.model';
import * as fromLista from './list.actions';

export const listaFeatureKey = 'lista';

export interface State {
  loading: boolean;
  error: any;
  entities: { [key: string]: List };
  ids: Array<string>;
}

export const initialState: State = {
  loading: false,
  entities: {},
  ids: [],
  error: null
};

export function reducer(state = initialState, action: fromLista.ListActions) {
  switch (action.type) {
    case fromLista.ListActionTypes.LoadLists:
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
      const itemid = action.payload.data.id;

      return {
        ...state,
        entities: {...state.entities, [itemid]: action.payload.data},
        ids: [...state.ids, itemid]
      };
    default:
      return {
        ...state
      };
  }
}
