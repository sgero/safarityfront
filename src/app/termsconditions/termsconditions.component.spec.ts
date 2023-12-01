import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsconditionsComponent } from './termsconditions.component';

describe('TermsconditionsComponent', () => {
  let component: TermsconditionsComponent;
  let fixture: ComponentFixture<TermsconditionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermsconditionsComponent]
    });
    fixture = TestBed.createComponent(TermsconditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
