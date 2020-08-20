import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaavuComponentComponent } from './baavu-component.component';

describe('BaavuComponentComponent', () => {
  let component: BaavuComponentComponent;
  let fixture: ComponentFixture<BaavuComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaavuComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaavuComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
