import { Module } from '@nestjs/common';
import { TodoService } from './services/todo.service';
import { TodoResolver } from './resolvers/todo.resolver';

@Module({
  providers: [TodoResolver, TodoService],
})
export class TodoModule {}
