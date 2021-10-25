import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPrimeComponent } from './ng-prime.component';

describe('NgPrimeComponent', () => {
  let component: NgPrimeComponent;
  let fixture: ComponentFixture<NgPrimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgPrimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgPrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
