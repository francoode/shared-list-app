import {Injectable} from '@angular/core';
import {AngularFirestore, QuerySnapshot} from '@angular/fire/firestore';
import {auth} from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestoreCollection} from '@angular/fire/firestore/collection/collection';

import {List} from '../ngrx/lista/list.model';
import {User} from '../ngrx/user/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore,
              private afAuth: AngularFireAuth) {
    this.userCollection = this.afs.collection('users');
  }

  public authUser() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then((data) => {
        this.existsUser(data.user);
      });
  }

  existsUser(user: firebase.User) {
    this.userCollection
      .ref.where('email', '==', user.email)
      .get()
      .then(data => this.manageUser(data, user));
  }

  manageUser(doc: QuerySnapshot<any>, user: firebase.User) {
    if (doc.empty) {

      const newUser = new User();
      newUser.email = user.email;



      this.userCollection.add({...newUser})
        .then(console.log);
    }
  }
}
