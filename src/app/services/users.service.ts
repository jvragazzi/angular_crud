import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  nome: string = 'João Victor';

  user: User = {
    name: 'João Victor',
    email: 'jao@gmail.com',
    tel: 31123456789,
    role: 'Dev Front end júnior'
  }

  constructor(private dataBaseStore: AngularFirestore) { }

  getAllUsers() {
    return this.dataBaseStore.collection('users', user => user.orderBy('name')).valueChanges({ idField: 'firebaseId'}) as Observable<any[]>;
  }

  addUser(user: User) {
    return this.dataBaseStore.collection('users').add(user);
  }

  update(userId: string, user: User) {
    return this.dataBaseStore.collection('users').doc(userId).update(user);
  }

  deleteUser(userId: string) {
    return this.dataBaseStore.collection('users').doc(userId).delete();
  }
}
