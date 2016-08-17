"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var todo_1 = require("../todo");
var TodosComponent = (function () {
    function TodosComponent() {
    }
    TodosComponent.prototype.add_todo = function () {
        var todo = new todo_1.Todo(this.todo_name);
        this.todos.push(todo);
        this.todo_name = "";
    };
    TodosComponent.prototype.ngOnInit = function () {
        this.todos = [];
        this.todo_name = '';
    };
    TodosComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-todos',
            templateUrl: 'todos.component.html',
            styleUrls: ['todos.component.css']
        })
    ], TodosComponent);
    return TodosComponent;
}());
exports.TodosComponent = TodosComponent;
//# sourceMappingURL=todos.component.js.map