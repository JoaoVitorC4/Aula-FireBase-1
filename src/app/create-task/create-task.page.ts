import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
=======
>>>>>>> ad724a1a80b9eb9f71b015f5361be0e36732a10f

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.page.html',
  styleUrls: ['./create-task.page.scss'],
})
export class CreateTaskPage implements OnInit {
<<<<<<< HEAD
  formulario: FormGroup
  constructor(
    private FormBuilder: FormBuilder
  ) { }

  ngOnInit() {7
    this.formulario = this.FormBuilder.group({
      title:['',Validators.required],
      description:['',Validators.required]
    })
=======

  constructor() { }

  ngOnInit() {
>>>>>>> ad724a1a80b9eb9f71b015f5361be0e36732a10f
  }

}
