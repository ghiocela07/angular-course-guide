import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsRequirementComponent } from './forms-requirement.component';

describe('FormsRequirementComponent', () => {
  let component: FormsRequirementComponent;
  let fixture: ComponentFixture<FormsRequirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsRequirementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
