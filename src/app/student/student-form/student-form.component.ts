import { Students } from './../../home/models/Students';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/Service/common.service';
import { ServerHttpService } from 'src/app/Service/server-http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
public masv = '';
  constructor(
    private commom:CommonService,
    private serverHttp: ServerHttpService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    //neu la 0 (addData) con lai la update
    this.masv = (this.route.snapshot.paramMap.get('masv') || '');
    if (this.masv.length != 1) {
      this.loadData(this.masv);
    }
  }

  //load data ra cai form de nhap
  private loadData(masv) {
    console.log("load data",masv)
    this.serverHttp.getStudentsByMaSV(masv).subscribe((data) =>{
      console.log(data);
      for(const controlName in this.studentForm.controls){
        if(controlName){
          this.studentForm.controls[controlName].setValue(data[controlName]);
        }
      }
    });
  }

  //Create new data sinh vien 
  private createNewData() {
    const newStudent = {};
    for (const controlName in this.studentForm.controls) {
      if (controlName) {
        newStudent[controlName] = this.studentForm.controls[controlName].value;
      }
    }
    return newStudent as Students;
  }

 //form group
 public studentForm = new FormGroup({
  masv:new FormControl(''),
  hodem: new FormControl(''),
  ten: new FormControl(''),
  dob: new FormControl(''),
  gioitinh: new FormControl(''),
  tinh: new FormControl(''),
  malop: new FormControl(''),
});

//fuction subnmit 
//lay cac thong tin nhap tu ban phim
/* public onSubmit(){
  const newStudent = {}; 
  for(const controlName in this.studentForm.controls){
    if(controlName){
      newStudent[controlName] = this.studentForm.controls[controlName].value;
        }
     }
     console.log(newStudent)
   this.serverHttp.addStudents(newStudent).subscribe( data =>{
     console.log(data);
     alert("Thêm sinh viên thành công !")
     this.router.navigate(['student'])
   }); 
  } */
  //luu du lieu sau khi chinh sua
  public saveAndGotoList() {
    if (this.masv.length > 1) {
      this.serverHttp
        .modifyStudent(this.masv, this.createNewData())
        .subscribe((data) => {
          this.router.navigate(['student']);
        });
    } else {
      this.serverHttp.addStudents(this.createNewData()).subscribe((data) => {
        this.router.navigate(['student']);
      });
    }
  }

}
