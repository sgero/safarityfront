import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizacionReg1Component } from './organizacion-reg1.component';

describe('OrganizacionReg1Component', () => {
  let component: OrganizacionReg1Component;
  let fixture: ComponentFixture<OrganizacionReg1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizacionReg1Component]
    });
    fixture = TestBed.createComponent(OrganizacionReg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
