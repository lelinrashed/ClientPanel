import { Injectable } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from '@angular/fire/database-deprecated';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Client } from './../models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clients: FirebaseListObservable<any[]>;
  client: FirebaseObjectObservable<any>;

  constructor(
    public af: AngularFirestore
  ) {
    this.clients = this.af.list('/clients') as FirebaseListObservable<Client[]>;
  }

  getClients() {
    return this.clients;
  }


}
