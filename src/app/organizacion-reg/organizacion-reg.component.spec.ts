import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizacionRegComponent } from './organizacion-reg.component';

describe('OrganizacionRegComponent', () => {
  let component: OrganizacionRegComponent;
  let fixture: ComponentFixture<OrganizacionRegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizacionRegComponent]
    });
    fixture = TestBed.createComponent(OrganizacionRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
