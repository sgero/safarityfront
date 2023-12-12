import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecaudacionComponent } from './recaudacion.component';

describe('RecaudacionComponent', () => {
  let component: RecaudacionComponent;
  let fixture: ComponentFixture<RecaudacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecaudacionComponent]
    });
    fixture = TestBed.createComponent(RecaudacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
