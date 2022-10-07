import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { outputAst } from '@angular/compiler';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})

export class TasksItemComponent implements OnInit {
  @Input() task: Task = TASKS[0]
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()

  faTimes = faTimes;


  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task){
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task){
    this.onToggleReminder.emit(task);
  }


  

}
