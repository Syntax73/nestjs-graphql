import { Resolver, Query } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver(of => LessonType)
export class LessonResolver {
  constructor() {}

  @Query(returns => LessonType)
  lesson() {
    return {
      id: 'jojo',
      name: 'Matematica',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }
}
