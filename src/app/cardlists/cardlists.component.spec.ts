import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardlistsComponent } from './cardlists.component';

describe('CardlistsComponent', () => {
  let component: CardlistsComponent;
  let fixture: ComponentFixture<CardlistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardlistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
