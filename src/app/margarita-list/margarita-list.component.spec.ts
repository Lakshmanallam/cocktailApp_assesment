import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MargaritaListComponent } from './margarita-list.component';

describe('MargaritaListComponent', () => {
  let component: MargaritaListComponent;
  let fixture: ComponentFixture<MargaritaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MargaritaListComponent]
    });
    fixture = TestBed.createComponent(MargaritaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
