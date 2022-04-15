import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComplaintModel, ReplyModel } from 'src/app/models/types';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-view-reply',
  templateUrl: './view-reply.component.html',
  styleUrls: ['./view-reply.component.css']
})
export class ViewReplyComponent implements OnInit {

  userComplaint: ComplaintModel = new ComplaintModel();
  adminReply: ReplyModel = new ReplyModel();

  constructor(@Inject(MAT_DIALOG_DATA) public inputComplaint: any, private ms: MessagesService) { }

  ngOnInit(): void {
    this.userComplaint = this.inputComplaint;
    console.debug(this.userComplaint);
    this.ms.getReply(this.userComplaint.id).subscribe(r => { this.adminReply = r[0] },
      err => { console.error(err) })
  }

}
