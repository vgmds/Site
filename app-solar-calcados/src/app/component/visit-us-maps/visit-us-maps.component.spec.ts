import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitUsMapsComponent } from './visit-us-maps.component';

describe('VisitUsMapsComponent', () => {
  let component: VisitUsMapsComponent;
  let fixture: ComponentFixture<VisitUsMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitUsMapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitUsMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
