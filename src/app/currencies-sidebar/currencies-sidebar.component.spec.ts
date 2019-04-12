import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenciesSidebarComponent } from './currencies-sidebar.component';

describe('CurrenciesSidebarComponent', () => {
  let component: CurrenciesSidebarComponent;
  let fixture: ComponentFixture<CurrenciesSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrenciesSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenciesSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
