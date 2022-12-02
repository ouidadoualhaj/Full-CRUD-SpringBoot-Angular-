import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-save',
  templateUrl: './contact-save.component.html',
  styleUrls: ['./contact-save.component.css']
})
export class ContactSaveComponent implements OnInit {
 
  contact: Contact = new Contact();

  constructor(private contactService: ContactService , private router: Router) { }

  ngOnInit(): void {
  }

  saveContact(){
    this.contactService.createContact(this.contact).subscribe( data =>{
      console.log(data);
      this.goToContactList();
    },
    error => console.log(error));
  }

  goToContactList(){
    this.router.navigate(['/contacts']);
  }

  onSubmit(){
    console.log(this.contact);
    this.saveContact();
  }
}
