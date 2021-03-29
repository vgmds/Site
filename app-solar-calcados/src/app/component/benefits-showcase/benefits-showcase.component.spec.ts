import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsShowcaseComponent } from './benefits-showcase.component';

describe('BenefitsShowcaseComponent', () => {
  let component: BenefitsShowcaseComponent;
  let fixture: ComponentFixture<BenefitsShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitsShowcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
