import { Controller, Get } from '@nestjs/common';

@Controller('courses')
export class CoursesController {

  @Get('')
  findall(): any{
    return {
        message:'Good morning'
    };
  }
}
