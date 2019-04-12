import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenciesContentComponent } from './currencies-content.component';

describe('CurrenciesContentComponent', () => {
  let component: CurrenciesContentComponent;
  let fixture: ComponentFixture<CurrenciesContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrenciesContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenciesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
