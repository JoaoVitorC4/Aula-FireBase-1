import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastButton, ToastController } from '@ionic/angular';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.page.html',
  styleUrls: ['./create-task.page.scss'],
})
export class CreateTaskPage implements OnInit {
  formulario: FormGroup
  constructor(
    private firebaseservice: TaskService,
    private FormBuilder: FormBuilder,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.formulario = this.FormBuilder.group({
      title:['',Validators.required],
      description:['',Validators.required]
    })
  }

  salvarTask(){
    this.firebaseservice.create(this.formulario.value).then(() => {
    this.mostraToast("Itens Salvo com Sucesso!");
    this.formulario.reset();
    })
  }

  async mostraToast(mensagem){
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 3000
    });
    await toast.present();
  }

}
