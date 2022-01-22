import { CreateSkillInput } from './create-skill.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSkillInput extends PartialType(CreateSkillInput) {
  @Field(() => String)
  id: string;
}
