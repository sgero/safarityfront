import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizacionReg2Component } from './organizacion-reg2.component';

describe('OrganizacionRegComponent', () => {
  let component: OrganizacionReg2Component;
  let fixture: ComponentFixture<OrganizacionReg2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizacionReg2Component]
    });
    fixture = TestBed.createComponent(OrganizacionReg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
