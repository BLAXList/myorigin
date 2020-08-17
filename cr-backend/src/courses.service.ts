import { Injectable } from '@nestjs/common'
import { Course } from './interfaces/course.interface';

@Injectable()
export class CoursesService {
    async findAll(): Promise<Course[]> {
        return [
            {
            id: '100' ,
            number: '01204111' ,
            title:'Computer and Programming'
            },
            {
            id: '20123fsd' ,
            number: '01204111' ,
            title:'Discrete mathematics and linear algebra'
            },
            {
              id: 'fdgerkfasd' ,
              number: '01204313' ,
              title:'Design and analysis of algorithms'
            },
          ];
    }
}