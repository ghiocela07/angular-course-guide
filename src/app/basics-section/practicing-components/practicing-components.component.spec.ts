import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PracticingComponentsComponent } from './practicing-components.component';

describe('PracticingComponentsComponent', () => {
  let component: PracticingComponentsComponent;
  let fixture: ComponentFixture<PracticingComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PracticingComponentsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticingComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
