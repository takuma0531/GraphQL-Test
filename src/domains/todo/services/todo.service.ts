import { Injectable } from '@nestjs/common';
import { Todo } from '../entities/todo.entity';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  create(title: string): Todo {
    const newTodo: Todo = {
      id: this.todos.length + 1,
      title,
      completed: false,
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number): Todo | undefined {
    return this.todos.find((todo) => todo.id === id);
  }

  update(id: number, title: string, completed: boolean): Todo | null {
    const todo = this.findOne(id);
    if (!todo) return null;
    if (title) todo.title = title;
    if (completed !== undefined) todo.completed = completed;
    return todo;
  }

  delete(id: number): boolean {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);
    if (todoIndex === -1) return false;
    this.todos.splice(todoIndex, 1);
    return true;
  }
}
