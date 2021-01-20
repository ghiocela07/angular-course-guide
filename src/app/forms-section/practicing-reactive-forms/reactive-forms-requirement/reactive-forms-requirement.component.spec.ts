import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsRequirementComponent } from './reactive-forms-requirement.component';

describe('ReactiveFormsRequirementComponent', () => {
  let component: ReactiveFormsRequirementComponent;
  let fixture: ComponentFixture<ReactiveFormsRequirementComponent>;

  beforeEach(async () => {
	await TestBed.configureTestingModule({
		declarations: [ ReactiveFormsRequirementComponent ]
	})
	.compileComponents();
  });

  beforeEach(() => {
	fixture = TestBed.createComponent(ReactiveFormsRequirementComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it('should create', () => {
	expect(component).toBeTruthy();
  });
});
