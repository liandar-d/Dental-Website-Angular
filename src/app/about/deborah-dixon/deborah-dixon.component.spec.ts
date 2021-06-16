import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeborahDixonComponent } from './deborah-dixon.component';

describe('DeborahDixonComponent', () => {
  let component: DeborahDixonComponent;
  let fixture: ComponentFixture<DeborahDixonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeborahDixonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeborahDixonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
