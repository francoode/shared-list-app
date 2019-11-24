import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {List} from '../../ngrx/lista/list.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../ngrx/app.reducer';
import {AddListSuccess} from '../../ngrx/lista/list.actions';


@Component({
  selector: 'app-all-list',
  templateUrl: './all-list.component.html',
  styleUrls: ['./all-list.component.scss']
})
export class AllListComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.createForm();
    this.store.select('list').subscribe(
      (list) => {
        console.log(list);
      }
    );
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
      console.log(list);

      this.store.dispatch(new AddListSuccess({data: list}));

    }
  }

}
