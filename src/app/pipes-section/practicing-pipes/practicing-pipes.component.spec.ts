import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticingPipesComponent } from './practicing-pipes.component';

describe('PracticingPipesComponent', () => {
  let component: PracticingPipesComponent;
  let fixture: ComponentFixture<PracticingPipesComponent>;

  beforeEach(async () => {
	await TestBed.configureTestingModule({
		declarations: [ PracticingPipesComponent ]
	})
	.compileComponents();
  });

  beforeEach(() => {
	fixture = TestBed.createComponent(PracticingPipesComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it('should create', () => {
	expect(component).toBeTruthy();
  });
});
