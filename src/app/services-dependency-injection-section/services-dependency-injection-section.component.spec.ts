import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesDependencyInjectionSectionComponent } from './services-dependency-injection-section.component';

describe('ServicesDependencyInjectionSectionComponent', () => {
  let component: ServicesDependencyInjectionSectionComponent;
  let fixture: ComponentFixture<ServicesDependencyInjectionSectionComponent>;

  beforeEach(async () => {
	await TestBed.configureTestingModule({
		declarations: [ ServicesDependencyInjectionSectionComponent ]
	})
	.compileComponents();
  });

  beforeEach(() => {
	fixture = TestBed.createComponent(ServicesDependencyInjectionSectionComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it('should create', () => {
	expect(component).toBeTruthy();
  });
});
