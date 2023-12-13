import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResenyaComponent } from './resenya.component';

describe('ResenyaComponent', () => {
  let component: ResenyaComponent;
  let fixture: ComponentFixture<ResenyaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResenyaComponent]
    });
    fixture = TestBed.createComponent(ResenyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
