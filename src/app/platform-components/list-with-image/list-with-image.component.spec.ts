import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWithImageComponent } from './list-with-image.component';

describe('ListWithImageComponent', () => {
  let component: ListWithImageComponent;
  let fixture: ComponentFixture<ListWithImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWithImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWithImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
