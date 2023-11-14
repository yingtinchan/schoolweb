import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ){}

  async create(createStudentDto: CreateStudentDto) {
    let findlastid = await this.studentRepository.find()
    let genid = "S"+(findlastid.length+1).toString();
    while(genid.length<9){
      genid = genid.substring(0, 1) + '0' + genid.substring(1)
    }
    createStudentDto.student_id = genid
    const data = this.studentRepository.create(createStudentDto);
    return this.studentRepository.save(data);
  }

  findAll() {
    return this.studentRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return this.studentRepository.delete(id);
  }
}
