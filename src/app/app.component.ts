import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListOfStudentComponent } from './list-of-student/list-of-student.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ListOfStudentComponent],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rivki-elfenbein';

  time() {
    let currentHour = new Date().getHours();
    if (currentHour > 13 && currentHour < 18)
      return "good afternoon"
    if (currentHour > 18 && currentHour > 6)
      return "good night"
    return "good morning"
  }
}
