import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  contacts = 
  [
    {
      name: 'John Doe',
      email: 'john@brdg.app',
      introsOffered: {free: 3, vip: 0}
    },
    {
      name: 'Billy Ray Jenkins',
      email: 'billy.jenkins@gmail.com',
      introsOffered: {free: 5, vip: 0}
    },
    {
      name: 'Jenny Baggins',
      email: 'jeni@x.com',
      introsOffered: {free: 5, vip: 1}
    },
    {
      name: 'Lloyd Banks',
      email: 'lloyd@banks.com',
      introsOffered: {free: 0, vip: 0}
    },
    {
      name: 'BA Lewis',
      email: 'ba.lewis@outlook.com',
      introsOffered: {free: 8, vip: 0}
    },
    {
      name: 'John Johnson',
      email: 'jj@z.com',
      introsOffered: {free: 4, vip: 0}
    },
    {
      name: 'Adam Johnson',
      email: 'aj@z.com',
      introsOffered: {free: 4, vip: 0}
    },
    {
      name: 'Joey Simpson',
      email: 'joey@hotmail.com',
      introsOffered: {free: 9, vip: 1}
    },
    {
      name: 'Penny Smith',
      email: 'penny@smith.com',
      introsOffered: {free: 2, vip: 0}
    }
  ];

  contactFree: any;
  contactVIP: any;
  rankedContacts:any;

  constructor() { }

  ngOnInit() {
    const rankedContacts = this.calcRanking();
    this.rankedContacts = rankedContacts;
    this.offerContact(rankedContacts);

  }

  calcRanking() {
    const rankArr = [...this.contacts];
    const personalEmails = ['gmail.com', 'outlook.com', 'hotmail.com'];
    return rankArr.map((o) => {
      o['rank'] = 3;
      const em = o.email.split('@');
      const emType = em[em.length - 1];
      const isPersonal =  _.includes(personalEmails, emType);
      if (!isPersonal)
        o['rank'] +=2

      if (o.introsOffered.free > 0 || o.introsOffered.vip > 0)
        o['rank'] +=1
      return o;
    })
  }

  offerContact(contacts) {
    const sortedContacts = _.orderBy(contacts, ['rank'],['desc']);
    this.contactVIP = _.maxBy(sortedContacts, 'rank');
    this.contactFree = _.pull(sortedContacts, this.contactVIP)
  }
  
}
