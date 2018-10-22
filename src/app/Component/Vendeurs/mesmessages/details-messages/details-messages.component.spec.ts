import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMessagesComponent } from './details-messages.component';

describe('DetailsMessagesComponent', () => {
  let component: DetailsMessagesComponent;
  let fixture: ComponentFixture<DetailsMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
