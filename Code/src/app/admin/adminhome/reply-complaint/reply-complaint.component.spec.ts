import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyComplaintComponent } from './reply-complaint.component';

describe('ReplyComplaintComponent', () => {
  let component: ReplyComplaintComponent;
  let fixture: ComponentFixture<ReplyComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplyComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplyComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
