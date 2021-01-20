import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesSectionComponent } from './pipes-section.component';

describe('PipesSectionComponent', () => {
  let component: PipesSectionComponent;
  let fixture: ComponentFixture<PipesSectionComponent>;

  beforeEach(async () => {
	await TestBed.configureTestingModule({
		declarations: [ PipesSectionComponent ]
	})
	.compileComponents();
  });

  beforeEach(() => {
	fixture = TestBed.createComponent(PipesSectionComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it('should create', () => {
	expect(component).toBeTruthy();
  });
});
