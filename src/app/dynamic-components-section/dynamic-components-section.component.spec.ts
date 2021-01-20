import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponentsSectionComponent } from './dynamic-components-section.component';

describe('DynamicComponentsSectionComponent', () => {
  let component: DynamicComponentsSectionComponent;
  let fixture: ComponentFixture<DynamicComponentsSectionComponent>;

  beforeEach(async () => {
	await TestBed.configureTestingModule({
		declarations: [ DynamicComponentsSectionComponent ]
	})
	.compileComponents();
  });

  beforeEach(() => {
	fixture = TestBed.createComponent(DynamicComponentsSectionComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it('should create', () => {
	expect(component).toBeTruthy();
  });
});
