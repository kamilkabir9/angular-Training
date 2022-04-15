import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReplyComplaintComponent } from 'src/app/admin/adminhome/reply-complaint/reply-complaint.component';
import { ComplaintModel } from 'src/app/models/types';
import { MessagesService } from 'src/app/services/messages.service';
import { ViewReplyComponent } from '../view-reply/view-reply.component';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  complaints: ComplaintModel[] = [];
  currentUserID: string = "";
  constructor(public ms: MessagesService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.currentUserID = sessionStorage.getItem("username")!;
    this.ms.getComplaints().subscribe(cs => {
      this.complaints = cs;
      this.complaints = this.complaints.filter(v => v.from.trim() == this.currentUserID.trim());
    });
  }

  openReplyBox(complaint: ComplaintModel) {
    console.debug(complaint);

    const dialogRef = this.dialog.open(ViewReplyComponent, {
      width: '250px',
      data: complaint,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}
