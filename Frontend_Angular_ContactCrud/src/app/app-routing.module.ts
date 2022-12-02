import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactSaveComponent } from './contact-save/contact-save.component';
import { ContactUpdateComponent } from './contact-update/contact-update.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'contacts', component: ContactsComponent},
  {path: 'addContact', component: ContactSaveComponent},
  {path: '', redirectTo: 'contacts', pathMatch: 'full'},
  {path: 'editContact/:id', component: ContactUpdateComponent},
  {path: 'deleteContact/:id', component: ContactsComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
