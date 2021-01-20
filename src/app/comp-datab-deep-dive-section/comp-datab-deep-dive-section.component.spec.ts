import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompDatabDeepDiveSectionComponent } from './comp-datab-deep-dive-section.component';

describe('CompDatabDeepDiveSectionComponent', () => {
  let component: CompDatabDeepDiveSectionComponent;
  let fixture: ComponentFixture<CompDatabDeepDiveSectionComponent>;

  beforeEach(async () => {
	await TestBed.configureTestingModule({
		declarations: [ CompDatabDeepDiveSectionComponent ]
	})
	.compileComponents();
  });

  beforeEach(() => {
	fixture = TestBed.createComponent(CompDatabDeepDiveSectionComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it('should create', () => {
	expect(component).toBeTruthy();
  });
});
