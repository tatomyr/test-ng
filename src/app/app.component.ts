import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private myErrors: String = '';
  private myForm: FormGroup;
  constructor( ) {
    this.myForm = new FormGroup({
      myInput: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Z].+/),
      ])
    });
  }
  hello = () => {
    document.querySelector('#modal').showModal();
  };
  close = () => {
    document.querySelector('#modal').close();
  };
  keyClick(){
    console.log(  this.myForm.controls.myInput);
    this.myErrors = this.myForm.controls.myInput.errors ? 'Invalid' : ''
  }
}
