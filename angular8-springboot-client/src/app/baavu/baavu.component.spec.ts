import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaavuComponent } from './baavu.component';

describe('BaavuComponent', () => {
  let component: BaavuComponent;
  let fixture: ComponentFixture<BaavuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaavuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaavuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
