import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Item} from '../ngrx/item/item.model';
import {Observable} from 'rxjs';
import {User} from '../ngrx/user/user.model';
import {List} from '../ngrx/lista/list.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;

  constructor(private afs: AngularFirestore) {
    this.usersCollection = afs.collection<User>('users');
    this.users = this.usersCollection.valueChanges();
  }

  add(user: User) {
    return new Promise((resolve, reject) => {
      this.usersCollection.add({...user})
        .then((data) => {
          user.id = data.id;
          resolve(user);
        })
        .catch((e) => reject(e));
    });
  }




}
