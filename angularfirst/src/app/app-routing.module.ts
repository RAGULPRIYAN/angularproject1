import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { KnownsComponent } from './knowns/knowns.component';
import { ContactsComponent } from './contacts/contacts.component';


const routes: Routes = [{ path: 'home', component: HomeComponent },{ path: 'about', component: AboutComponent },
{ path: 'knowns', component: KnownsComponent },{ path: 'contacts', component: ContactsComponent }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
