import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosVendeursComponent } from './nos-vendeurs.component';

describe('NosVendeursComponent', () => {
  let component: NosVendeursComponent;
  let fixture: ComponentFixture<NosVendeursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosVendeursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosVendeursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
