import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  @Output() search_event = new EventEmitter();

  onSearch(username: string = null) {
    if (username !== null) {
    console.log('(in search-user Component) SUCCESS: received username: ' + username);
    console.log('(in search-user Component) emitting username ' + username + ' to appComponent');
    this.search_event.emit(username);
    } else {
      console.log('(in search-user Component) ERROR: username not received');
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
