import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesRequirementComponent } from './pipes-requirement.component';

describe('PipesRequirementComponent', () => {
  let component: PipesRequirementComponent;
  let fixture: ComponentFixture<PipesRequirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesRequirementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
