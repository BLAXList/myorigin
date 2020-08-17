import { Controller, Get } from '@nestjs/common';

@Controller('courses')
export class CoursesController {

  @Get('')
  findall(): any{
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
