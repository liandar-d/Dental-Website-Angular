import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LydiaPotreousComponent } from './lydia-potreous.component';

describe('LydiaPotreousComponent', () => {
  let component: LydiaPotreousComponent;
  let fixture: ComponentFixture<LydiaPotreousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LydiaPotreousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LydiaPotreousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
