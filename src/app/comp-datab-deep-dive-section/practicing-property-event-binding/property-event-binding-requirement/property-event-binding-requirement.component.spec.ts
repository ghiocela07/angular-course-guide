import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyEventBindingRequirementComponent } from './property-event-binding-requirement.component';

describe('PropertyEventBindingRequirementComponent', () => {
  let component: PropertyEventBindingRequirementComponent;
  let fixture: ComponentFixture<PropertyEventBindingRequirementComponent>;

  beforeEach(async () => {
	await TestBed.configureTestingModule({
		declarations: [ PropertyEventBindingRequirementComponent ]
	})
	.compileComponents();
  });

  beforeEach(() => {
	fixture = TestBed.createComponent(PropertyEventBindingRequirementComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it('should create', () => {
	expect(component).toBeTruthy();
  });
});
