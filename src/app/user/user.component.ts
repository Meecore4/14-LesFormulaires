import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

    name = new FormControl('');
    mail = new FormControl('');
    mdp = new FormControl('');
    nomRue = new FormControl('');
    codePostal = new FormControl('');
    ville = new FormControl('');

    myUser : User | undefined;
    
  onSubmit(){
 this.myUser = new User(
  this.name.value, 
  this.mail.value,
  this.mdp.value,
  this.nomRue.value,
  this.codePostal.value,
  this.ville.value
  )}
}
