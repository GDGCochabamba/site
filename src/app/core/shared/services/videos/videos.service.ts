import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor(
    private fdb: AngularFirestore
  ) {
  }

  getRows () {
    return this.fdb.collection('videos').valueChanges();
  }

  getRow () {
    return this.fdb.collection('videos', ref => ref.limit(1) ).valueChanges();
  }
}
