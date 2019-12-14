import {User} from './user.model';
import * as fromUser from './user.actions';

export interface State {
  loading: boolean;
  error: any;
  entities: { [key: string]: User };
  ids: Array<string>;
}

export const initialState: State = {
  loading: false,
  entities: {},
  ids: [],
  error: null
};

export function reducer(state = initialState, action: fromUser.UserActions): State {
  switch (action.type) {
    case fromUser.UserActionTypes.LoadUsers:
      return {
        ...state,
        loading: true,
      };
    case fromUser.UserActionTypes.LoadUsersSuccess:
      return {
        loading: false,
        ...state,
      };
    case fromUser.UserActionTypes.LoadUsersFailure:
      return {
        ...state,
        loading: true,
      };
    case fromUser.UserActionTypes.AddUser:
      return {
        ...state,
        loading: true
      };
    case fromUser.UserActionTypes.AddUserFailure:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case fromUser.UserActionTypes.AddUserSuccess:
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
