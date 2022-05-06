import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private ngFirestore: AngularFirestore,
    private router: Router
  ) { }

  create(task: Task) {
    return this.ngFirestore.collection('tasks').add(task);
  }
}
