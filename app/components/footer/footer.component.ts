
import { Component } from '@angular/core';
import {AngularFirestore} from "angularfire2/firestore";

@Component({
  selector: 'footer-ang',
  templateUrl: 'footer.component.html',
  styleUrls: ['../../../assets/scss/main.scss']
})

export class FooterComponent {

  information;

  constructor(private db: AngularFirestore) {
    this.information = this.db.doc('footer-information/information').valueChanges();
  };

}
