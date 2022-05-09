import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  ParseUUIDPipe,
} from '@nestjs/common';
import {
  CrateStudentDto,
  UpdateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
} from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly StudentService: StudentService) {}

  @Get()
  getStudents(): FindStudentResponseDto[] {
    return this.StudentService.getStudents();
  }

  @Get('/:studentId')
  getStudnetById(
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
  ): FindStudentResponseDto {
    return this.StudentService.getStudnetById(studentId);
  }

  @Post()
  createStudent(@Body() body: CrateStudentDto): StudentResponseDto {
    return this.StudentService.createStudent(body);
  }

  @Put('/:studentId')
  updateStudent(
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
    @Body() body: UpdateStudentDto,
  ): StudentResponseDto {
    return this.StudentService.updateStudent(body, studentId);
  }
}
