import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeenaGopiComponent } from './seena-gopi.component';

describe('SeenaGopiComponent', () => {
  let component: SeenaGopiComponent;
  let fixture: ComponentFixture<SeenaGopiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeenaGopiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeenaGopiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
