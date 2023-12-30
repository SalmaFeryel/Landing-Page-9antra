import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
constructor(private CourseService: CoursesService){
  
}
Courses! :any[]
  ngOnInit(): void {
    this.CourseService.getCourses().subscribe(result=>this.Courses=result)
  }
}
