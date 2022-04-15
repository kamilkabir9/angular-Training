import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ComplaintModel } from 'src/app/models/types';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  currentComplaint: ComplaintModel = new ComplaintModel();
  constructor(private formBuilder: FormBuilder, private ms: MessagesService) { }

  complaintForm = this.formBuilder.group({
    subject: ['', [Validators.required]],
    message: ['', [Validators.required]]
  });

  ngOnInit(): void {
    console.log(this.currentComplaint);
    this.currentComplaint.from = sessionStorage.getItem("username")!;
    this.currentComplaint.to = "kamil";
    console.log(this.currentComplaint);
  }

  sendComplaint() {
    this.currentComplaint.id = this.getID();
    this.currentComplaint.subject = this.complaintForm.value.subject;
    this.currentComplaint.message = this.complaintForm.value.message;
    console.log(this.complaintForm.value);
    console.log(this.currentComplaint);
    this.ms.addComplaint(this.currentComplaint).subscribe(() => {
      console.log(`Complaint posted #${this.currentComplaint.id}`);
      alert(`Complaint posted #${this.currentComplaint.id}`);
      this.complaintForm.reset();
    }, err => { console.error(err) });
  }

  getID(): number { // min and max included
    return Math.floor(Math.random() * (2000 - 1000 + 1) + 1000)
  }

}
