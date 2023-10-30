import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktaildetailsComponent } from './cocktaildetails.component';

describe('CocktaildetailsComponent', () => {
  let component: CocktaildetailsComponent;
  let fixture: ComponentFixture<CocktaildetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CocktaildetailsComponent]
    });
    fixture = TestBed.createComponent(CocktaildetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
