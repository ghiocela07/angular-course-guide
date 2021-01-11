import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsSolutionComponent } from './reactive-forms-solution.component';

describe('ReactiveFormsSolutionComponent', () => {
  let component: ReactiveFormsSolutionComponent;
  let fixture: ComponentFixture<ReactiveFormsSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormsSolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
