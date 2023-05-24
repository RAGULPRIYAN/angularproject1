import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnownsComponent } from './knowns.component';

describe('KnownsComponent', () => {
  let component: KnownsComponent;
  let fixture: ComponentFixture<KnownsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KnownsComponent]
    });
    fixture = TestBed.createComponent(KnownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
