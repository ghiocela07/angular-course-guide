import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingRequirementComponent } from './databinding-requirement.component';

describe('DatabindingRequirementComponent', () => {
  let component: DatabindingRequirementComponent;
  let fixture: ComponentFixture<DatabindingRequirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabindingRequirementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabindingRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
