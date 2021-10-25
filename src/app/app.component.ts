import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { CommonService } from './Service/common.service';
import { ServerHttpService } from './Service/server-http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Demo';

  @ViewChild('sidenav')
    sidenav!: MatSidenav;
  public isOpened = false;
  public totalStudents = 0;

  constructor(
    private common: CommonService,
    private serverHttp: ServerHttpService
  ) {}

  ngOnInit(): void {
    
  }

  public openLeftSide() {
    this.isOpened = !this.isOpened;
    this.sidenav.toggle();
  }

  public closeLeftSide() {
    this.isOpened = false;
  }
}

