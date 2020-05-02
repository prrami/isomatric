import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
interface Subject {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  inputControl = new FormControl('', Validators.required);
  subjects: Subject[] = [
    {value: 'Metal Exterior Louvers', viewValue: 'Metal Exterior Louvers'},
    {value: 'Metal False Ceilings', viewValue: 'Metal False Ceilings'},
    {value: 'Wooden Texture', viewValue: 'Wooden Texture'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
