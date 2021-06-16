import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrownsAndBridgesComponent } from './crowns-and-bridges.component';

describe('CrownsAndBridgesComponent', () => {
  let component: CrownsAndBridgesComponent;
  let fixture: ComponentFixture<CrownsAndBridgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrownsAndBridgesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrownsAndBridgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
