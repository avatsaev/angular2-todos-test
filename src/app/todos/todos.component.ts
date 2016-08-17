import { Component, OnInit } from '@angular/core';

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
    this.todos.push({
      title: this.todo_name,
      completed: false
    });

    this.todo_name = "";
  }

  complete_todo(todo){
    todo.completed = !todo.completed;
  }

  ngOnInit() {
    this.todos = [
      {
        title: "Meeting",
        completed: true
      }
    ];
  }

}
