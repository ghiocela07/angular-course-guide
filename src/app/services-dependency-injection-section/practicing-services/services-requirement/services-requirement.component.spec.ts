import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesRequirementComponent } from './services-requirement.component';

describe('ServicesRequirementComponent', () => {
  let component: ServicesRequirementComponent;
  let fixture: ComponentFixture<ServicesRequirementComponent>;

  beforeEach(async () => {
	await TestBed.configureTestingModule({
		declarations: [ ServicesRequirementComponent ]
	})
	.compileComponents();
  });

  beforeEach(() => {
	fixture = TestBed.createComponent(ServicesRequirementComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it('should create', () => {
	expect(component).toBeTruthy();
  });
});
