import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesSolutionComponent } from './pipes-solution.component';

describe('PipesSolutionComponent', () => {
  let component: PipesSolutionComponent;
  let fixture: ComponentFixture<PipesSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesSolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
