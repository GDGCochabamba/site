import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(
    private fdb: AngularFirestore
  ) {
  }

  getRows () {
    return this.fdb.collection('members').valueChanges();
  }

  getRow () {
    return this.fdb.collection('members', ref => ref.limit(1) ).valueChanges();
  }
}
