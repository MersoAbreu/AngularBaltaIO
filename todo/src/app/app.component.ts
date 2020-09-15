import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title:string ='Minhas tarefas';
  public form:FormGroup ;

  constructor(){
     this.todos.push(new Todo(1, "Passear com o Fly",false));
     this.todos.push(new Todo(2, "Cortar o cabelo",false));
     this.todos.push(new Todo(3, "Fazer trabalhos da Facul",true));
  }


  remove(todo:Todo){
    const index = this.todos.indexOf(todo);
    if(index!=-1){
      this.todos.splice(index, 1);
    }
  }
  markAsDone(todo:Todo){
    todo.done=true;
  }
  markAsUndone(todo:Todo){
    todo.done=false;
  }

}
