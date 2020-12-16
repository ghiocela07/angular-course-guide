import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticingPropertyEventBindingComponent } from './practicing-property-event-binding.component';

describe('PracticingPropertyEventBindingComponent', () => {
  let component: PracticingPropertyEventBindingComponent;
  let fixture: ComponentFixture<PracticingPropertyEventBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticingPropertyEventBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticingPropertyEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
