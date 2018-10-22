import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeslistesProduitsComponent } from './meslistes-produits.component';

describe('MeslistesProduitsComponent', () => {
  let component: MeslistesProduitsComponent;
  let fixture: ComponentFixture<MeslistesProduitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeslistesProduitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeslistesProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
