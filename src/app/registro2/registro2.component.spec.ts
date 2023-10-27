import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registro2Component } from './registro2.component';

describe('Registro2Component', () => {
  let component: Registro2Component;
  let fixture: ComponentFixture<Registro2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Registro2Component]
    });
    fixture = TestBed.createComponent(Registro2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
