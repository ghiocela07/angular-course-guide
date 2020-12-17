import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesDeepDiveSectionComponent } from './directives-deep-dive-section.component';

describe('DirectivesDeepDiveSectionComponent', () => {
  let component: DirectivesDeepDiveSectionComponent;
  let fixture: ComponentFixture<DirectivesDeepDiveSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesDeepDiveSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesDeepDiveSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
