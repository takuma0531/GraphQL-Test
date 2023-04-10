import { Query, Resolver } from '@nestjs/graphql';
import { Hello } from './hello.model';

@Resolver(Hello)
export class HelloResolver {
  @Query(() => String)
  async greet() {
    return 'Hello!';
  }
}
