import { Students } from './../home/models/Students';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Service/common.service';
import { ServerHttpService } from '../Service/server-http.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  public students: Students[] = [];
  public isChecked;
  public searchValue = '';
/* buoc 1 : khai bao 2 service  va router - chuyen trang khi click nut add*/
  constructor(   
    private serverHttp: ServerHttpService,
    private router:Router,
    ) { }

  ngOnInit(): void {
   this.loadData();
     }
       /* Buoc 2 : get List student from server */
    //get student from API server
     //ham load lai data
     public loadData(){
      this.serverHttp.getStudents().subscribe((data) => {
       this.students = data;
     });
     }
  
     //ham nay dung khai bao lam viec voi html
     public addStudent(){
      this.router.navigate(['student-form',0])
     }
     //ham xoa sinh vien
      public xoaSV(studentId){
        this.serverHttp.deleteStudent(studentId).subscribe((data) => {
          console.log('delete', data);
          this.loadData();
        });
    }
    //ham sua thong tin sinh vien
    public editStudent(studentId){
      this.router.navigate(['student-form',studentId])
    }

    //tim kiem sinh vien
    public searchStudent(key: string): void {
      console.log(key);
      const gender = 'Nu';
      const results: Students[] = [];
    this.students.forEach(element => {
    if(element.masv.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
    element.malop.toLowerCase().indexOf(key.toLowerCase()) !== -1 &&
    element.gioitinh.toLowerCase().indexOf(gender.toLowerCase()) !== -1
      ){
       results.push(element)
    }
    });
    this.students= results;
    if (results.length === 0 || !key) {
      this.loadData();
    }
    }
   
  }