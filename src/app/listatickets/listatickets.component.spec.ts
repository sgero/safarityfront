import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaticketsComponent } from './listatickets.component';

describe('ListaticketsComponent', () => {
  let component: ListaticketsComponent;
  let fixture: ComponentFixture<ListaticketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaticketsComponent]
    });
    fixture = TestBed.createComponent(ListaticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
