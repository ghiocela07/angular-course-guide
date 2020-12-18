import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticingServicesComponent } from './practicing-services.component';

describe('PracticingServicesComponent', () => {
  let component: PracticingServicesComponent;
  let fixture: ComponentFixture<PracticingServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticingServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
