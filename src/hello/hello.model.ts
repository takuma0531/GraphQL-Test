import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Hello {
  @Field(() => String)
  greeting?: string;
}
