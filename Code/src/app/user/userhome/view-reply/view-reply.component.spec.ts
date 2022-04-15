import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReplyComponent } from './view-reply.component';

describe('ViewReplyComponent', () => {
  let component: ViewReplyComponent;
  let fixture: ComponentFixture<ViewReplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewReplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
