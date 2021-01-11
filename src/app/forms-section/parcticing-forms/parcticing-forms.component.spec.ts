import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcticingFormsComponent } from './parcticing-forms.component';

describe('ParcticingFormsComponent', () => {
  let component: ParcticingFormsComponent;
  let fixture: ComponentFixture<ParcticingFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParcticingFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcticingFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
