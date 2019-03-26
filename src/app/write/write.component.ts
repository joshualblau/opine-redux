//to be essentially replaced with the democracy.io app

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss']
})
export class WriteComponent implements OnInit {

  pressed: boolean = false;

  //form-related properties
  letterForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.letterForm = this.formBuilder.group({
      letter: ['', Validators.required]
    })
  }

  press() {
    this.pressed = true;
  }

  onSubmit() {
    alert(this.letterForm.controls.letter.value);
  }

}
