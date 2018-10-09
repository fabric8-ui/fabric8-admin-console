import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../../services/data-store.service';
import { SearchUserService } from '../../services/search-user.service';
import { log } from 'util';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {
  users;
  constructor(
    private store: DataStoreService,
    private searchuserservices: SearchUserService
  ) { }
  sortedArray: any;
  sort(sortBy: string, order: string) {
    if (order === 'desc') {
      this.users.sort(function(a, b) {
        return b.attributes[sortBy].localeCompare(a.attributes[sortBy], 'en', {sensitivity: 'base'}); // descending
      });
    } else if (order === 'asc') {
      this.users.sort(function(a, b) {
        return a.attributes[sortBy].localeCompare(b.attributes[sortBy], 'en', {sensitivity: 'base'}); // descending
      });
    }
  }
  ngOnInit() {
    this.store.users.subscribe(users => this.users = users);
  }

}
