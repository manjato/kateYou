import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendeurprofilComponent } from './vendeurprofil.component';

describe('VendeurprofilComponent', () => {
  let component: VendeurprofilComponent;
  let fixture: ComponentFixture<VendeurprofilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendeurprofilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendeurprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
