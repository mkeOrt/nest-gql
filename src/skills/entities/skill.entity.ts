import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Skill {
  @Field(() => String)
  id: string;
  
  @Field(() => String)
  name: string;
}
