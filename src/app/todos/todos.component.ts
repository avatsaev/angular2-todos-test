import { Component, OnInit } from '@angular/core';
import {Todo} from "../todo";


@Component({
  moduleId: module.id,
  selector: 'app-todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.css']
})

export class TodosComponent implements OnInit {

  todos;
  todo_name;

  constructor() {


  }

  add_todo(){
    let todo:Todo = new Todo(this.todo_name);

    this.todos.push(todo);
    this.todo_name = "";
  }



  ngOnInit() {
    this.todos = [];
    this.todo_name = '';

  }

}
