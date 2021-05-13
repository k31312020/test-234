import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private store: AngularFirestore) {
  }

  get(collection: string): Observable<unknown> {
    return this.store.collection(collection).valueChanges({idField: 'id'});
  }

  create(collection: string, data): Promise<any> {
    return this.store.collection(collection).add({...data});
  }

  update(collection: string, id, data): Promise<void> {
    return this.store.collection(collection).doc(id).update({...data});
  }

  delete(collection: string, id): Promise<void>  {
    return this.store.collection(collection).doc(id).delete();
  }
}
