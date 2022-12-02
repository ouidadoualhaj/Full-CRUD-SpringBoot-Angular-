import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  public url = "http://localhost:8086/api/contacts";

  constructor(private httpClient: HttpClient) { }

  getAllContacts(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(`${this.url}`);
  }

  createContact(contact: Contact): Observable<Object>{
    return this.httpClient.post(`${this.url}`, contact);
  }

  getContactById(id: number): Observable<Contact>{
    return this.httpClient.get<Contact>(`${this.url}/${id}`);
  }

  editContact(id: number, contact: Contact): Observable<Object>{
    return this.httpClient.put(`${this.url}/${id}`, contact);
  }

  deleteContact(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.url}/${id}`);
  }

}
