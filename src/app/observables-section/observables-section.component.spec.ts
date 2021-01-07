import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesSectionComponent } from './observables-section.component';

describe('ObservablesSectionComponent', () => {
  let component: ObservablesSectionComponent;
  let fixture: ComponentFixture<ObservablesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservablesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
