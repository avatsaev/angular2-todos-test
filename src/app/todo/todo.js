"use strict";
var Todo = (function () {
    function Todo(title) {
        this.title = title;
        this.completed = false;
    }
    Todo.prototype.complete = function () {
        this.completed = !this.completed;
    };
    return Todo;
}());
exports.Todo = Todo;
//# sourceMappingURL=todo.js.map