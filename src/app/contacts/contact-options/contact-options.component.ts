import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-contact-options',
  templateUrl: './contact-options.component.html',
  styleUrls: ['./contact-options.component.scss'],
})
export class ContactOptionsComponent implements OnInit {
  @Input() contacts;

  orderedList: any;
  constructor() { }

  ngOnInit() {
    const arr = this.contacts.map((obj) => {
      obj['firstName'] = obj.name.split(' ').slice(0, -1).join(' ');
      obj['lastName'] = obj.name.split(' ').slice(-1).join(' ');
      return obj;
    });
    this.orderedList = _.orderBy(arr, [
       (item) => { return item.lastName; },
    ], ["asc"]);
  }

}
