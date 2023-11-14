import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Teacher } from './entities/teacher.entity';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private readonly teacherRepository: Repository<Teacher>,
  ){}

  async create(createTeacherDto: CreateTeacherDto) {
    let findlastid = await this.teacherRepository.find()
    let genid = "T"+(findlastid.length+1).toString();
    while(genid.length<9){
      genid = genid.substring(0, 1) + '0' + genid.substring(1)
    }
    createTeacherDto.teacher_id = genid
    const data = this.teacherRepository.create(createTeacherDto);
    return this.teacherRepository.save(data);
  }

  findAll() {
    return this.teacherRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} teacher`;
  }

  update(id: number, updateTeacherDto: UpdateTeacherDto) {
    return `This action updates a #${id} teacher`;
  }

  remove(id: number) {
    return this.teacherRepository.delete(id);
  }
}
