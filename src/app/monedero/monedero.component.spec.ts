import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonederoComponent } from './monedero.component';

describe('MonederoComponent', () => {
  let component: MonederoComponent;
  let fixture: ComponentFixture<MonederoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonederoComponent]
    });
    fixture = TestBed.createComponent(MonederoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
