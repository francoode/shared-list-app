import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {List} from '../ngrx/lista/list.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private listCollection: AngularFirestoreCollection<List>;
  lists: Observable<List[]>;

  constructor(private afs: AngularFirestore) {
    this.listCollection = afs.collection<List>('lists');
    this.lists = this.listCollection.valueChanges();
  }

  add(list: List) {
    return new Promise((resolve, reject) => {
      this.listCollection.add({...list})
        .then((data) => {
          list.id = data.id;
          resolve(list);
        })
        .catch((e) => reject(e));
    });
  }

  all() {
    return this.lists.pipe(
      map(data => console.log(data))
    );
  }
}
