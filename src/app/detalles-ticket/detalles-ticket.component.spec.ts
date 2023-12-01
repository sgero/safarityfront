import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesTicketComponent } from './detalles-ticket.component';

describe('DetallesTicketComponent', () => {
  let component: DetallesTicketComponent;
  let fixture: ComponentFixture<DetallesTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesTicketComponent]
    });
    fixture = TestBed.createComponent(DetallesTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
