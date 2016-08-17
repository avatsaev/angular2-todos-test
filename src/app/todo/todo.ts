
export class Todo {

  title:String;
  completed:Boolean;

  constructor(title:String) {
    this.title = title;
    this.completed = false;
  }

  complete(){
    this.completed = !this.completed;
  }


}
