import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts !: Contact[];

  constructor(private contactService: ContactService ,private router: Router) { }

  ngOnInit(): void {
    this.getContacts();
  }

  private getContacts() {
    this.contactService.getAllContacts().subscribe(data => {
      this.contacts = data;
    });
  }

  updateContact(id: number){
     this.router.navigate(['editContact', id]);
  }

  deleteContact(id: number){
    this.contactService.deleteContact(id).subscribe( data =>{
      console.log(data);
      this.getContacts();
    })
  }
}
