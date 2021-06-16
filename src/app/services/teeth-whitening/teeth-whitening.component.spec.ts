import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeethWhiteningComponent } from './teeth-whitening.component';

describe('TeethWhiteningComponent', () => {
  let component: TeethWhiteningComponent;
  let fixture: ComponentFixture<TeethWhiteningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeethWhiteningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeethWhiteningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
