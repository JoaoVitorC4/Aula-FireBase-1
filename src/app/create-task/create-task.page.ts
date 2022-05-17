import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.page.html',
  styleUrls: ['./create-task.page.scss'],
})
export class CreateTaskPage implements OnInit {
  formulario: FormGroup
  constructor(
    private FormBuilder: FormBuilder
  ) { }

  ngOnInit() {7
    this.formulario = this.FormBuilder.group({
      title:['',Validators.required],
      description:['',Validators.required]
    })
  }

}
