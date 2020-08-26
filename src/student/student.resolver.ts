import { StudentService } from './student.service';
import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { CreateStudentInput } from './create-student.input';
import { Student } from './student.entity';

@Resolver(of => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query(returns => StudentType)
  async getStudent(@Args('id') id: string): Promise<Student> {
    return this.studentService.getStudent(id);
  }

  @Query(returns => [StudentType])
  async getAllStudents(): Promise<Student[]> {
    return this.studentService.getAllStudents();
  }

  @Mutation(returns => StudentType)
  async createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    return this.studentService.createStudent(createStudentInput);
  }
}
