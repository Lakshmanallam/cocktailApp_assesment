import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MojitoListComponent } from './mojito-list.component';

describe('MojitoListComponent', () => {
  let component: MojitoListComponent;
  let fixture: ComponentFixture<MojitoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MojitoListComponent]
    });
    fixture = TestBed.createComponent(MojitoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
