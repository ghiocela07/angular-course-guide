import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsRequirementComponent } from './components-requirement.component';

describe('ComponentsRequirementComponent', () => {
  let component: ComponentsRequirementComponent;
  let fixture: ComponentFixture<ComponentsRequirementComponent>;

  beforeEach(async () => {
	await TestBed.configureTestingModule({
		declarations: [ ComponentsRequirementComponent ]
	})
	.compileComponents();
  });

  beforeEach(() => {
	fixture = TestBed.createComponent(ComponentsRequirementComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it('should create', () => {
	expect(component).toBeTruthy();
  });
});
