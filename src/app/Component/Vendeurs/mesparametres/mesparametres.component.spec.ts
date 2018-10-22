import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesparametresComponent } from './mesparametres.component';

describe('MesparametresComponent', () => {
  let component: MesparametresComponent;
  let fixture: ComponentFixture<MesparametresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesparametresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesparametresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
