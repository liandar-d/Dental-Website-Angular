import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobinChenComponent } from './robin-chen.component';

describe('RobinChenComponent', () => {
  let component: RobinChenComponent;
  let fixture: ComponentFixture<RobinChenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RobinChenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RobinChenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
