import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsSectionComponent } from './forms-section.component';

describe('FormsSectionComponent', () => {
  let component: FormsSectionComponent;
  let fixture: ComponentFixture<FormsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
