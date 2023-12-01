import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedageneralComponent } from './busquedageneral.component';

describe('BusquedageneralComponent', () => {
  let component: BusquedageneralComponent;
  let fixture: ComponentFixture<BusquedageneralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusquedageneralComponent]
    });
    fixture = TestBed.createComponent(BusquedageneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
