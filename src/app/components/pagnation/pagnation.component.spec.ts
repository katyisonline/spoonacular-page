import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagnationComponent } from './pagnation.component';

describe('PagnationComponent', () => {
  let component: PagnationComponent;
  let fixture: ComponentFixture<PagnationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagnationComponent]
    });
    fixture = TestBed.createComponent(PagnationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
