import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {

  constructor(private service:ContactService, private router:Router){}

  contacts:Contact[] = [ ];
  delmsg:string = "";


  ngOnInit(): void {
    this.getContacts();
  }


  getContacts(){
    this.service.getContacts().subscribe(response => {
      this.contacts = response;
    });
  }

  editContact(id:number){
    this.router.navigate(['/edit', id]);
  }

  deleteContact(id:number){
    this.service.deleteContactByid(id).subscribe(response => {
        this.delmsg = response;
        this.getContacts();
    });
    
  }
}
