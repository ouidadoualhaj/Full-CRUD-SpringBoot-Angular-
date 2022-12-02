import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.css']
})
export class ContactUpdateComponent implements OnInit {

  contact: Contact = new Contact();
  id!: number;
  constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.contactService.getContactById(this.id).subscribe(data => {
      this.contact = data;
    },
      error => console.log(error));
  }

  onSubmit() {
    this.contactService.editContact(this.id, this.contact).subscribe(data => {
      this.goToContactList();
    }
      , error => console.log(error));
  }



  goToContactList() {
    this.router.navigate(['/contacts']);
  }
}
