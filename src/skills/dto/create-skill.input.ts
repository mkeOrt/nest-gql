import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateSkillInput {  
  @Field(() => String)
  name: string;
}
