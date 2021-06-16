import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaylaFlewellynComponent } from './kayla-flewellyn.component';

describe('KaylaFlewellynComponent', () => {
  let component: KaylaFlewellynComponent;
  let fixture: ComponentFixture<KaylaFlewellynComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaylaFlewellynComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KaylaFlewellynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
