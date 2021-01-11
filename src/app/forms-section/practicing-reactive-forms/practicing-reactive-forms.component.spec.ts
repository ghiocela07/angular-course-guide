import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticingReactiveFormsComponent } from './practicing-reactive-forms.component';

describe('PracticingReactiveFormsComponent', () => {
  let component: PracticingReactiveFormsComponent;
  let fixture: ComponentFixture<PracticingReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticingReactiveFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticingReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
