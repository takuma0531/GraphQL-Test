import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Todo } from '../entities/todo.entity';
import { TodoService } from '../services/todo.service';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private todoService: TodoService) {}

  @Query(() => [Todo], { name: 'todos' })
  todos(): Todo[] {
    return this.todoService.findAll();
  }

  @Query(() => Todo, { name: 'todo' })
  todo(@Args('id', { type: () => Number }) id: number): Todo | undefined {
    return this.todoService.findOne(id);
  }

  @Mutation(() => Todo, { name: 'createTodo' })
  createTodo(@Args('title', { type: () => String }) title: string): Todo {
    return this.todoService.create(title);
  }

  @Mutation(() => Todo, { name: 'updateTodo' })
  updateTodo(
    @Args('id', { type: () => Number }) id: number,
    @Args('title', { type: () => String, nullable: true }) title: string,
    @Args('completed', { type: () => Boolean, nullable: true })
    completed: boolean,
  ) {
    return this.todoService.update(id, title, completed);
  }

  @Mutation(() => Boolean, { name: 'deleteTodo' })
  deleteTodo(@Args('id', { type: () => Number }) id: number) {
    return this.todoService.delete(id);
  }
}
