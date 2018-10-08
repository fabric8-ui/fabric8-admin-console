import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  private _users = new BehaviorSubject(undefined);

  get users() {
    return this._users.asObservable();
  }

  constructor() { }

  /**
   * store_user
   * stores the username received in user_list
   */
  public store_user(users) {
    console.log("store user")
    console.log("users "+this.users);
    this._users.next(users);
    console.log('(in data-store) users saved'+this._users);
  }
}
