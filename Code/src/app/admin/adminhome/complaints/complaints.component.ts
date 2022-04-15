import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComplaintModel } from 'src/app/models/types';
import { MessagesService } from 'src/app/services/messages.service';
import { ReplyComplaintComponent } from '../reply-complaint/reply-complaint.component';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {

  complaints: ComplaintModel[] = [];
  constructor(public ms: MessagesService, public dialog: MatDialog) { }
  ngOnInit(): void {
    this.ms.getComplaints().subscribe(cs => { this.complaints = cs });
  }


  openReplyBox(complaint: ComplaintModel) {
    console.debug(complaint);

    const dialogRef = this.dialog.open(ReplyComplaintComponent, {
      width: '250px',
      data: complaint,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
