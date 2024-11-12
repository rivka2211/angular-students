import { Component } from '@angular/core';
import { student } from '../../models/student';

@Component({
  selector: 'app-list-of-student',
  standalone: true,
  imports: [],
  templateUrl: './list-of-student.component.html',
  styleUrl: './list-of-student.component.css'
})
export class ListOfStudentComponent {
arrStudent:student[]=[new student(1,"rivki","belz 15",true,100),
                     new student(2,"rut"," hashomer 154",true,92),
                     new student(3,"racheli","akiva",false,97),
                     new student(4,"shifi","bb 100",true,100),
                      new student(5,"racheli","pt",true,99)
]
}
