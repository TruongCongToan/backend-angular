import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
public age = 10;

public  addAge () {
  this.age ++;
}
/**
 * name
 */
public deAge() {
  this.age --;
}
  constructor() { }
}
