import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWithTextComponent } from './list-with-text.component';

describe('ListWithTextComponent', () => {
  let component: ListWithTextComponent;
  let fixture: ComponentFixture<ListWithTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWithTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWithTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
