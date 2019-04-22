import { Component, OnInit } from '@angular/core';
import { CoursesService, Course } from './courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title: string;
  courses: Course[];
  imageUrl: string;
  colSpan = 2;
  isActive = true;
  email: string;
  courseExample = {
      title: "The Complete Angular Course",
      rating: 4.9745,
      students: 30123,
      price: 190.95,
      releaseDate: new Date(2016, 3, 1)
  }
  veryLongText: string = `In case you don't know, I'm a rookie cop in a small, rural, Pennsylvania town currently stuck working the night shift. I work your normal patrol shift, driving around pulling traffic, responding to your usual domestic disputes and whatever other wonderful calls dispatch sends my way. I responded to some bizarre calls the other week and right as I thought life was returning to normal, I now find myself in the eye of yet another unsettling investigation.

  “Dispatch to 1034.”
  
  “1034, go ahead.”
  
  “We just got a call from a woman who said she came home from work and can’t find her daughter anywhere. She was very distraught and the call taker was not able to obtain much additional information. Can you please respond to this address for a potential missing child report?"`;
  summaryLength = 50;
  courseAddInput: string;

  constructor(service: CoursesService) { // An example of dependency injection
    this.title = "List of courses";
    this.courses = service.getCourses();
    this.imageUrl = "http://lorempixel.com/400/200";
    this.email = "me@example.com";
  }

  onSave($event) {
    $event.stopPropagation(); // stops event from bubbling up to parent objects
    this.isActive = !this.isActive;
    console.log("onSave() called", $event);
  }

  onDivClicked() {
    console.log("onDivClicked() called");
  }

  onKeyUp() {
    console.log(this.email);
  }

  onVeryLongTextClicked() {
    console.log("onVeryLongTextClicked() called")
    let defaultLength = 50;
    this.summaryLength = this.veryLongText.length == this.summaryLength ? defaultLength : this.veryLongText.length;
  }

  onRemoveCourse(eventArgs: Course) {
    this.courses.splice(this.courses.indexOf(eventArgs),1);
  }

  onAddCourse() {
    let nextAvailableId = this.courses.length + 1;
    for(let i = 1; i <= this.courses.length; i++) {
      if (!this.courses.find(c => c.id == i))
        nextAvailableId = i;
    }
    this.courses.push({ id: nextAvailableId, name: this.courseAddInput });
  }

  ngOnInit() {
  }
}
