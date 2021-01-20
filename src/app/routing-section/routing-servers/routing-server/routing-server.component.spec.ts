import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingServerComponent } from './routing-server.component';

describe('RoutingServerComponent', () => {
  let component: RoutingServerComponent;
  let fixture: ComponentFixture<RoutingServerComponent>;

  beforeEach(async () => {
	await TestBed.configureTestingModule({
		declarations: [ RoutingServerComponent ]
	})
	.compileComponents();
  });

  beforeEach(() => {
	fixture = TestBed.createComponent(RoutingServerComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it('should create', () => {
	expect(component).toBeTruthy();
  });
});
