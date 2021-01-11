import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsSolutionComponent } from './forms-solution.component';

describe('FormsSolutionComponent', () => {
  let component: FormsSolutionComponent;
  let fixture: ComponentFixture<FormsSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsSolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
