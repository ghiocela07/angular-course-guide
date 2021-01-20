import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesRequirementComponent } from './directives-requirement.component';

describe('DirectivesRequirementComponent', () => {
  let component: DirectivesRequirementComponent;
  let fixture: ComponentFixture<DirectivesRequirementComponent>;

  beforeEach(async () => {
	await TestBed.configureTestingModule({
		declarations: [ DirectivesRequirementComponent ]
	})
	.compileComponents();
  });

  beforeEach(() => {
	fixture = TestBed.createComponent(DirectivesRequirementComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it('should create', () => {
	expect(component).toBeTruthy();
  });
});
