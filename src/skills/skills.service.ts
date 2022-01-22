import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSkillInput } from './dto/create-skill.input';
import { UpdateSkillInput } from './dto/update-skill.input';
import { Skill } from './entities/skill.entity';

const skills: Skill[] = [];

@Injectable()
export class SkillsService {
  create(createSkillInput: CreateSkillInput) {
    const skill = {
      ...createSkillInput,
      id: Date.now().toString(),
    }
    skills.push(skill);
    return skill;
  }

  findAll() {
    return skills;
  }

  findOne(id: string) {
    const skill = skills.find(skill => skill.id === id);
    if (!skill) throw new NotFoundException('Skill not found');
    return skill;
  }

  update(id: string, updateSkillInput: UpdateSkillInput) {
    const skill = this.findOne(id);
    if (updateSkillInput.name) Object.assign(skill, { name: updateSkillInput.name });
    return skill;
  }

  remove(id: string) {
    const skillIndex = skills.findIndex(skill => skill.id === id);
    if (skillIndex === -1) throw new NotFoundException('Skill not found');
    const removedSkill = { ...skills[skillIndex] };
    skills.splice(skillIndex, 1);
    return removedSkill;

  }
}
