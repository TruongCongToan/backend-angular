import { CommonService } from './../Service/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
public name = "Truong cong toan";
public age =10;
  constructor(private common: CommonService) {
    this.age= common.age;
   }

  ngOnInit(): void {
  }
  public  addAge () {
   this.common.age++;
   this.age= this.common.age;
  }
  /**
   * name
   */
  public deAge() {
    this.common.age--;
    this.age= this.common.age;
  }

}
