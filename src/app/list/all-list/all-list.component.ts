import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {List} from '../../ngrx/lista/list.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../ngrx/app.redux';
import * as fromList from '../../ngrx/lista/list.actions';


@Component({
  selector: 'app-all-list',
  templateUrl: './all-list.component.html',
  styleUrls: ['./all-list.component.scss']
})
export class AllListComponent implements OnInit {

  form: FormGroup;
  loading = false;
  lists: {};

  constructor(private fb: FormBuilder,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.createForm();
    this.storeSucription();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['']
    });
  }

  add() {
    if (this.form.valid) {
      const list = new List();

      list.nombre = this.form.controls.name.value;

      this.store.dispatch(new fromList.AddList({data: list}));
    }
  }

  storeSucription() {
    this.store.select('list').subscribe(
      (data) => {
        this.lists = data.entities;
      }
    );

    this.store.dispatch(new fromList.LoadLists());
  }

}
