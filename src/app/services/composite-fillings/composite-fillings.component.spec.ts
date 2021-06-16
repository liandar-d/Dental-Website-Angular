import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositeFillingsComponent } from './composite-fillings.component';

describe('CompositeFillingsComponent', () => {
  let component: CompositeFillingsComponent;
  let fixture: ComponentFixture<CompositeFillingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompositeFillingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompositeFillingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
