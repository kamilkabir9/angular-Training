import { Component, Inject, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComplaintModel, ReplyModel } from 'src/app/models/types';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-reply-complaint',
  templateUrl: './reply-complaint.component.html',
  styleUrls: ['./reply-complaint.component.css']
})
export class ReplyComplaintComponent implements OnInit {

  userComplaint: ComplaintModel = new ComplaintModel();
  adminReply: ReplyModel = new ReplyModel();
  replyForm = this.formBuilder.group({
    reply: ['', [Validators.required]]
  });

  constructor(private formBuilder: FormBuilder, private ms: MessagesService, public dialogRef: MatDialogRef<ReplyComplaintComponent>,
    @Inject(MAT_DIALOG_DATA) public inputComplaint: any) { }

  ngOnInit(): void {
    console.debug(this.inputComplaint);
    this.userComplaint = this.inputComplaint;
    console.debug(this.userComplaint);

  }
  sendReply() {
    console.debug("sending reply");
    this.adminReply.reply = this.replyForm.value.reply;
    this.adminReply.from = sessionStorage.getItem("username")!;
    this.adminReply.id = this.userComplaint.id;
    this.ms.addReply(this.adminReply).subscribe(() => {
      console.log("reply posted");
      alert("reply posted");
      this.onNoClick();
    }, err => { console.error(err); }
    )
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
