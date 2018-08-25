import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { GDGEvent } from './event.model';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  // u could use this if u want to add, update or remove
  // private eventsCollection$: AngularFirestoreCollection<GDGEvent>;

  constructor(
    private fdb: AngularFirestore
  ) {
    // u could use this if u want to add, update or remove
    // this.eventsCollection$ = fdb.collection<GDGEvent>('events');
  }

  // TODO: create a generic way to do a dinamic filter for each collection
  private dinamicCollection (initialQuery: QueryParams) {
    const events$ = new BehaviorSubject(initialQuery || null);
    const queryObservable = events$
      .pipe(
        switchMap((params: QueryParams) =>
          this.fdb.collection('events', ref => {
            let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
            if (params) {
              if (typeof params.main === 'boolean') {
                query = query.where('main', '==', params.main);
              }
              if (params.limit) {
                query = query.limit(params.limit);
              }
            }
            return query
              .orderBy('date', 'desc');
          }).valueChanges()
        )
      );

    return {
      data: queryObservable,
      subject: events$
    };
  }

  // we need to find a good name for this
  start (initialQuery: QueryParams = {}) {
    return this.dinamicCollection(initialQuery);
  }

  query(subject, params: QueryParams = {}) {
    const queryParams: QueryParams = {};
    if (params) {
      if (typeof params.main === 'boolean') {
        queryParams.main = params.main;
      }
      if (params.limit) {
        queryParams.limit = params.limit;
      }
    }
    subject.next(queryParams);
  }

  getRows (params: QueryParams = {}) {
    return this.start(params).data;
  }

  getRow (params: QueryParams = {}) {
    params.limit = 1;
    return this.start(params).data;
  }
}

interface QueryParams {
  main?: boolean;
  limit?: number;
}
