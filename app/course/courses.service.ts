import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses: Course[];

  constructor() { 
    this.courses = [
      { id: 1, name: "course1" },
      { id: 2, name: "course2" },
      { id: 3, name: "course3" },
      { id: 4, name: "course4" },
    ];
  }

  getCourses(): Course[] {
    return this.courses;
  }
}

export interface Course {
  id: number
  name: string
}