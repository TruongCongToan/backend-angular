import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-prime',
  templateUrl: './ng-prime.component.html',
  styles: [`
  :host ::ng-deep button {
      margin-right: .5em;
  }
`]})
export class NgPrimeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
