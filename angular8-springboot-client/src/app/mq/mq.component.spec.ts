import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MQComponent } from './mq.component';

describe('MQComponent', () => {
  let component: MQComponent;
  let fixture: ComponentFixture<MQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
