import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import 'rxjs/add/operator/map';

import { Smartphone } from '../interfaces/smartphone.model';

@Injectable()
export class DataService {

  constructor(private db: AngularFirestore) {
  }

  public getData(){
    return this.db.collection<Smartphone>('test-data').snapshotChanges()
      .map(docArray => {
        return docArray.map(doc => {
          const data = doc.payload.doc.data() as Smartphone;
          const id = doc.payload.doc.id;
          return {id, ...data};
        });
      });
  }

}
