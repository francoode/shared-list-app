import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {auth} from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private afs: AngularFirestore,
              private afAuth: AngularFireAuth) {
  }

  public authUser() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then((data) => {
        this.existsUser(data.user);
      });
  }

  existsUser(user: firebase.User) {
    const doc = this.afs.collection('users').doc(user.email);
    doc.get().subscribe({
      next: value => console.log(value),
      error: err => console.log(err)
    });
  }
}
