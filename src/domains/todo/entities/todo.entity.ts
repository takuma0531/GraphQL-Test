import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field(() => Number)
  id?: number;

  @Field(() => String)
  title?: string;

  @Field(() => Boolean)
  completed?: boolean;
}
