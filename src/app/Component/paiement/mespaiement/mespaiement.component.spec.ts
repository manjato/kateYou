import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MespaiementComponent } from './mespaiement.component';

describe('MespaiementComponent', () => {
  let component: MespaiementComponent;
  let fixture: ComponentFixture<MespaiementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MespaiementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MespaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
