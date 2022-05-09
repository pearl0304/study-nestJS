import { Controller, Get, Param, Put, ParseUUIDPipe } from '@nestjs/common';
import {
  FindStudentResponseDto,
  StudentResponseDto,
} from '../student/dto/student.dto';
import { StudentService } from '../student/student.service';
@Controller('teachers/:teacherId/students')
export class StrudnetTeacherController {
  constructor(private readonly StudentService: StudentService) {}
  @Get()
  getStudents(
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
  ): FindStudentResponseDto[] {
    return this.StudentService.getStudentsByTeacherId(teacherId);
  }
  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
  ): StudentResponseDto {
    return this.StudentService.updateStudentTeacher(teacherId, studentId);
  }
}
