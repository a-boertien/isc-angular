import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayeesManagerComponent } from './payees-manager.component';

describe('PayeesManagerComponent', () => {
  let component: PayeesManagerComponent;
  let fixture: ComponentFixture<PayeesManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayeesManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayeesManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
