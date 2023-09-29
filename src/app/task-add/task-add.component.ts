import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TaskStorageService} from "../task-storage.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent {

  /**
   * Task title form field
   */
  title = new FormControl('');

  /**
   *  Task note form field
   */
  note = new FormControl('');

  /**
  * Task status form field
  */
  status = new FormControl('');
  /**
  *  Task difficulty form field
  */
  difficulty = new FormControl('');


  constructor(private storage: TaskStorageService, private router: Router) {
  }


  /**
   * Create a task a redirect to the todo list
   */
  createTask() {
    this.storage.add({id: null , title: this.title.value, note: this.note.value, status: this.status.value, difficulty: this.difficulty.value});
    this.router.navigate(['/tasks'])
  }
}
