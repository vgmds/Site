import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrableProductListComponent } from './filtrable-product-list.component';

describe('FiltrableProductListComponent', () => {
  let component: FiltrableProductListComponent;
  let fixture: ComponentFixture<FiltrableProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrableProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrableProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
