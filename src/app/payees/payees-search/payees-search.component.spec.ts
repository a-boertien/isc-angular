import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayeesSearchComponent } from './payees-search.component';

describe('PayeesSearchComponent', () => {
  let component: PayeesSearchComponent;
  let fixture: ComponentFixture<PayeesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayeesSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayeesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
