import {Injectable} from '@angular/core';
import {AddList, AddListFailure, AddListSuccess, ListActionTypes} from './list.actions';
import {ListService} from '../../services/list.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {List} from './list.model';
import {of} from 'rxjs';


@Injectable()
export class ListEffect {
  constructor(
    private actions$: Actions,
    private service: ListService
  ) {
  }


  addList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ListActionTypes.AddList),
      switchMap((action: AddList) => this.service.add(action.payload.data)),
      map((list: List) => {
        return new AddListSuccess({data: list});
      }),
      catchError((err => of(new AddListFailure({error: err}))))
    )
  );
}
