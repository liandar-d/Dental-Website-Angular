import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuisaAntonioComponent } from './luisa-antonio.component';

describe('LuisaAntonioComponent', () => {
  let component: LuisaAntonioComponent;
  let fixture: ComponentFixture<LuisaAntonioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuisaAntonioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuisaAntonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
